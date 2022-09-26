// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;
pragma abicoder v2;

import {IERC20} from './dependencies/openzeppelin/contracts/IERC20.sol';
import {GPv2SafeERC20} from './dependencies/gnosis/contracts/GPv2SafeERC20.sol';
import {Address} from './dependencies/openzeppelin/contracts/Address.sol';
import {ILendingPoolAddressesProvider} from './interfaces/ILendingPoolAddressesProvider.sol';
import {IInitializableOToken} from './interfaces/IInitializableOToken.sol';
import {IOToken} from './interfaces/IOToken.sol';
import {ILendingPool} from './interfaces/ILendingPool.sol';
import {VersionedInitializable} from './libraries/aave-upgradeability/VersionedInitializable.sol';
import {Errors} from './libraries/helpers/Errors.sol';
import {WadRayMath} from './libraries/math/WadRayMath.sol';
import {PercentageMath} from './libraries/math/PercentageMath.sol';
import {ReserveLogic} from './libraries/logic/ReserveLogic.sol';
import {ReserveConfiguration} from './libraries/configuration/ReserveConfiguration.sol';
import {DataTypes} from './libraries/types/DataTypes.sol';
import {LendingPoolStorage} from './LendingPoolStorage.sol';
import {InitializableImmutableAdminUpgradeabilityProxy} from './libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol';

/**
 * @title LendingPool contract
 * @dev Main point of interaction with a Vinci protocol's market
 * - Users can:
 *   # Deposit
 *   # Withdraw
 * - To be covered by a proxy contract, owned by the LendingPoolAddressesProvider of the specific market
 * - All admin functions are callable by the PoolOperator contract defined also in the
 *   LendingPoolAddressesProvider
 * @author Aave
 * @author Vinci
 **/
contract LendingPool is VersionedInitializable, ILendingPool, LendingPoolStorage {
  using WadRayMath for uint256;
  using PercentageMath for uint256;
  using GPv2SafeERC20 for IERC20;
  using ReserveLogic for DataTypes.ReserveData;
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  uint256 public constant LENDINGPOOL_REVISION = 0x1;

  modifier whenNotPaused() {
    require(!_paused, Errors.LP_IS_PAUSED);
    _;
  }

  modifier onlyPoolOperator() {
    require(
      _addressesProvider.getPoolOperator() == msg.sender,
      Errors.LP_CALLER_NOT_POOL_OPERATOR
    );
    _;
  }

  modifier onlyPoolAdmin {
    require(_addressesProvider.getPoolAdmin() == msg.sender, Errors.CALLER_NOT_POOL_ADMIN);
    _;
  }

  modifier onlyEmergencyAdmin {
    require(
      _addressesProvider.getEmergencyAdmin() == msg.sender,
      Errors.LPC_CALLER_NOT_EMERGENCY_ADMIN
    );
    _;
  }

  function getRevision() internal pure override returns (uint256) {
    return LENDINGPOOL_REVISION;
  }

  /**
   * @dev Function is invoked by the proxy contract when the LendingPool contract is added to the
   * LendingPoolAddressesProvider of the market.
   * - Caching the address of the LendingPoolAddressesProvider in order to reduce gas consumption
   *   on subsequent operations
   * @param provider The address of the LendingPoolAddressesProvider
   **/
  function initialize(ILendingPoolAddressesProvider provider) public initializer {
    _addressesProvider = provider;
  }

  /**
   * @dev Deposits an `amount` of underlying asset into the reserve, receiving in return overlying vTokens.
   * - E.g. User deposits 100 USDC and gets in return 100 aUSDC
   * @param amount The amount to be deposited
   * @param onBehalfOf The address that will receive the vTokens, same as msg.sender if the user
   *   wants to receive them on his own wallet, or a different address if the beneficiary of vTokens
   *   is a different wallet
   **/
  function deposit(
    uint256 amount,
    address onBehalfOf,
    uint16 referralCode
  ) external override whenNotPaused returns(uint256) {
    require(amount != 0, Errors.VL_INVALID_AMOUNT);
    uint40 currentTimestamp = uint40(block.timestamp);

    (bool isActive, bool isFrozen) = _reserve.configuration.getFlags();
    require((currentTimestamp >= _reserve.purchaseBeginTimestamp) 
             && ((currentTimestamp < _reserve.purchaseEndTimestamp) 
                  || (currentTimestamp >= _reserve.redemptionBeginTimestamp)),
            Errors.VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD);
    require(isActive, Errors.VL_NO_ACTIVE_RESERVE);
    require(!isFrozen, Errors.VL_RESERVE_FROZEN);

    address oTokenAddress = _reserve.oTokenAddress;

    IOToken oToken = IOToken(oTokenAddress);

    uint256 availableFund = _reserve.purchaseUpperLimit - oToken.totalSupply();

    if(amount > availableFund){
      amount = availableFund;
    }

    oToken.mint(onBehalfOf, amount, _reserve.liquidityIndex);

    IERC20(oToken.UNDERLYING_ASSET_ADDRESS()).safeTransferFrom(msg.sender, oTokenAddress, amount);

    emit Deposit(msg.sender, onBehalfOf, amount, referralCode);

    return amount;
  }

  function depositFund(
    uint256 amount
  ) external override onlyPoolOperator {
    require(amount != 0, Errors.VL_INVALID_AMOUNT);
    address oTokenAddress = _reserve.oTokenAddress;
    IERC20 asset = IERC20(IOToken(oTokenAddress).UNDERLYING_ASSET_ADDRESS());
    asset.safeTransferFrom(msg.sender, oTokenAddress, amount);
    emit FundDeposit(msg.sender, amount);
  }

  /**
   * @dev Withdraws an `amount` of underlying asset from the reserve, burning the equivalent aTokens owned
   * E.g. User has 100 vUSDC, calls withdraw() and receives 100 USDC, burning the 100 vUSDC
   * @param amount The underlying amount to be withdrawn
   *   - Send the value type(uint256).max in order to withdraw the whole vToken balance
   * @param to Address that will receive the underlying, same as msg.sender if the user
   *   wants to receive it on his own wallet, or a different address if the beneficiary is a
   *   different wallet
   * @return The final amount withdrawn
   **/
  function withdraw(
    uint256 amount,
    address to
  ) external override whenNotPaused returns (uint256) {

    address oToken = _reserve.oTokenAddress;

    uint256 userBalance = IOToken(oToken).balanceOf(msg.sender);

    uint256 amountToWithdraw = amount;

    if (amount == type(uint256).max) {
      amountToWithdraw = userBalance;
    }

    uint40 currentTimestamp = uint40(block.timestamp);

    require(amount != 0, Errors.VL_INVALID_AMOUNT);
    require(amount <= userBalance, Errors.VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE);
    require((currentTimestamp >= _reserve.purchaseBeginTimestamp) 
             && ((currentTimestamp < _reserve.purchaseEndTimestamp) 
                  || (currentTimestamp >= _reserve.redemptionBeginTimestamp)),
            Errors.VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD);
    (bool isActive, ) = _reserve.configuration.getFlags();
    require(isActive, Errors.VL_NO_ACTIVE_RESERVE);

    IOToken(oToken).burn(msg.sender, to, amountToWithdraw, _reserve.liquidityIndex);

    emit Withdraw(msg.sender, to, amountToWithdraw);

    return amountToWithdraw;
  }

  function withdrawFund(uint256 amount) external override whenNotPaused onlyPoolAdmin returns (uint256) {
    uint256 currentTimestamp = block.timestamp;
    require(amount > 0, Errors.VL_INVALID_AMOUNT);
    require((currentTimestamp >= _reserve.purchaseEndTimestamp) && (currentTimestamp < _reserve.redemptionBeginTimestamp), Errors.VL_NOT_IN_LOCK_PERIOD);
    uint256 amountToWithdraw = amount;
    address oTokenAddress = _reserve.oTokenAddress;
    IOToken oToken = IOToken(oTokenAddress);
    IERC20 asset = IERC20(oToken.UNDERLYING_ASSET_ADDRESS());
    if (amount == type(uint256).max) {
      amountToWithdraw = asset.balanceOf(oTokenAddress);
    }
    oToken.transferUnderlyingTo(_reserve.fundAddress, amountToWithdraw);

    emit FundWithdraw(_reserve.fundAddress, amountToWithdraw);

    return amountToWithdraw;
  }

  /**
   * @dev Returns the state and configuration of the reserve
   * @return The state of the reserve
   **/
  function getReserveData()
    external
    view
    override
    returns (DataTypes.ReserveData memory)
  {
    return _reserve;
  }

  function updateNetValue(uint256 netValue)
    external
    onlyPoolOperator
  {
    require(netValue > 0, Errors.VL_INVALID_AMOUNT);
    uint256 currentTimestamp = block.timestamp;
    require((uint40(currentTimestamp) >= _reserve.purchaseEndTimestamp) && (uint40(currentTimestamp) < _reserve.redemptionBeginTimestamp), Errors.VL_NOT_IN_LOCK_PERIOD);
    address oToken = _reserve.oTokenAddress;
    uint256 oldNetValue = IOToken(oToken).scaledTotalSupply().rayMul(_reserve.previousLiquidityIndex);
    _reserve.updateNetValue(netValue, oldNetValue, currentTimestamp);
  }

  function initializeNextPeroid(uint16 managementFeeRate, uint16 performanceFeeRate, uint128 purchaseUpperLimit,
    uint40 purchaseBeginTimestamp, uint40 purchaseEndTimestamp, 
    uint40 redemptionBeginTimestamp)
    external
    onlyPoolOperator
  {
    require(uint40(block.timestamp) >= _reserve.redemptionBeginTimestamp, Errors.VL_NOT_FINISHED);
    require((purchaseBeginTimestamp >= _reserve.redemptionBeginTimestamp)
            &&(purchaseBeginTimestamp < purchaseEndTimestamp)
            && (purchaseEndTimestamp < redemptionBeginTimestamp),
      Errors.VL_INVALID_TIMESTAMP);
    _reserve.managementFeeRate = managementFeeRate;
    _reserve.performanceFeeRate = performanceFeeRate;
    _reserve.purchaseUpperLimit = purchaseUpperLimit;
    _reserve.previousLiquidityIndex = _reserve.liquidityIndex;
    _reserve.currentLiquidityRate = uint128(WadRayMath.ray());
    _reserve.purchaseBeginTimestamp = purchaseBeginTimestamp;
    _reserve.purchaseEndTimestamp = purchaseEndTimestamp;
    _reserve.redemptionBeginTimestamp = redemptionBeginTimestamp;
  }

  /**
   * @dev Returns the configuration of the reserve
   * @return The configuration of the reserve
   **/
  function getConfiguration()
    external
    view
    override
    returns (DataTypes.ReserveConfigurationMap memory)
  {
    return _reserve.configuration;
  }

  /**
   * @dev Returns the normalized income per unit of asset
   * @return The reserve's normalized income
   */
  function getReserveNormalizedIncome()
    external
    view
    virtual
    override
    returns (uint256)
  {
    return _reserve.getNormalizedIncome();
  }

  /**
   * @dev Returns if the LendingPool is paused
   */
  function paused() external view override returns (bool) {
    return _paused;
  }

  /**
   * @dev Returns the cached LendingPoolAddressesProvider connected to this contract
   **/
  function getAddressesProvider() external view override returns (ILendingPoolAddressesProvider) {
    return _addressesProvider;
  }

  /**
   * @dev Set the _pause state of a reserve
   * - Only callable by the PoolOperator contract
   * @param val `true` to pause the reserve, `false` to un-pause it
   */
  function setPause(bool val) external override onlyEmergencyAdmin {
    _paused = val;
    if (_paused) {
      emit Paused();
    } else {
      emit Unpaused();
    }
  }

  function updateFuncAddress(address fundAddress) external onlyPoolAdmin {
    require(fundAddress != address(0), Errors.LPC_INVALID_ADDRESSES_PROVIDER_ID);
    _reserve.fundAddress = fundAddress;
    emit FundAddressUpdated(fundAddress);
  }

  /**
   * @dev Updates the vToken implementation for the reserve
   **/
  function updateOToken(UpdateOTokenInput calldata input) external onlyPoolAdmin {

    uint256 decimals = _reserve.configuration.getParamsMemory();

    bytes memory encodedCall = abi.encodeWithSelector(
        IInitializableOToken.initialize.selector,
        address(this),
        decimals,
        input.name,
        input.symbol,
        input.params
      );

    _upgradeImplementation(
      _reserve.oTokenAddress,
      input.implementation,
      encodedCall
    );

    emit OTokenUpgraded(_reserve.oTokenAddress, input.implementation);
  }

  function initReserve(InitReserveInput calldata input) external onlyPoolAdmin {
    address oTokenProxyAddress =
      _initContractWithProxy(
        input.oTokenImpl,
        abi.encodeWithSelector(
          IInitializableOToken.initialize.selector,
          address(this),
          input.underlyingAsset,
          input.underlyingAssetDecimals,
          input.oTokenName,
          input.oTokenSymbol,
          input.params
        )
      );

    _reserve.init(oTokenProxyAddress, input.fundAddress);

    DataTypes.ReserveConfigurationMap memory currentConfig = _reserve.configuration;

    currentConfig.setDecimals(input.underlyingAssetDecimals);

    currentConfig.setActive(true);
    currentConfig.setFrozen(false);

    _reserve.configuration.data = currentConfig.data;

    emit ReserveInitialized(
      oTokenProxyAddress
    );
  }

  function _initContractWithProxy(address implementation, bytes memory initParams)
    internal
    returns (address)
  {
    InitializableImmutableAdminUpgradeabilityProxy proxy =
      new InitializableImmutableAdminUpgradeabilityProxy(address(this));

    proxy.initialize(implementation, initParams);

    return address(proxy);
  }

  function _upgradeImplementation(
    address proxyAddress,
    address implementation,
    bytes memory initParams
  ) internal {
    InitializableImmutableAdminUpgradeabilityProxy proxy =
      InitializableImmutableAdminUpgradeabilityProxy(payable(proxyAddress));

    proxy.upgradeToAndCall(implementation, initParams);
  }

}
