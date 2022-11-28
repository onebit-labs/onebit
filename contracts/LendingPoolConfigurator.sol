// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;
pragma abicoder v2;

import {VersionedInitializable} from './libraries/aave-upgradeability/VersionedInitializable.sol';
import {
  InitializableImmutableAdminUpgradeabilityProxy
} from './libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol';
import {ReserveConfiguration} from './libraries/configuration/ReserveConfiguration.sol';
import {ILendingPoolAddressesProvider} from './interfaces/ILendingPoolAddressesProvider.sol';
import {ILendingPool} from './interfaces/ILendingPool.sol';
import {IERC20Metadata} from './dependencies/openzeppelin/contracts/IERC20Metadata.sol';
import {Errors} from './libraries/helpers/Errors.sol';
import {PercentageMath} from './libraries/math/PercentageMath.sol';
import {DataTypes} from './libraries/types/DataTypes.sol';
import {IInitializableOToken} from './interfaces/IInitializableOToken.sol';
import {ILendingPoolConfigurator} from './interfaces/ILendingPoolConfigurator.sol';

/**
 * @title LendingPoolConfigurator contract
 * @author Aave
 * @dev Implements the configuration methods for the Aave protocol
 **/

contract LendingPoolConfigurator is VersionedInitializable, ILendingPoolConfigurator {
  using PercentageMath for uint256;
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  ILendingPoolAddressesProvider internal addressesProvider;
  ILendingPool internal pool;

  modifier onlyPoolAdmin {
    require(addressesProvider.getPoolAdmin() == msg.sender, Errors.CALLER_NOT_POOL_ADMIN);
    _;
  }

  modifier onlyEmergencyAdmin {
    require(
      addressesProvider.getEmergencyAdmin() == msg.sender,
      Errors.LPC_CALLER_NOT_EMERGENCY_ADMIN
    );
    _;
  }

  modifier onlyKYCAdmin {
    require(
      addressesProvider.getKYCAdmin() == msg.sender || addressesProvider.getPoolAdmin() == msg.sender,
      Errors.LPC_CALLER_NOT_KYC_ADMIN
    );
    _;
  }

  uint256 internal constant CONFIGURATOR_REVISION = 0x3;

  function getRevision() internal pure override returns (uint256) {
    return CONFIGURATOR_REVISION;
  }

  function initialize(ILendingPoolAddressesProvider provider) public initializer {
    addressesProvider = provider;
    pool = ILendingPool(addressesProvider.getLendingPool());
  }

  function initReserve(InitReserveInput calldata input) external onlyPoolAdmin {
    address oTokenProxyAddress =
      _initContractWithProxy(
        input.oTokenImpl,
        abi.encodeWithSelector(
          IInitializableOToken.initialize.selector,
          pool,
          input.underlyingAsset,
          input.underlyingAssetDecimals,
          input.oTokenName,
          input.oTokenSymbol,
          input.params
        )
      );

    pool.initReserve(oTokenProxyAddress, input.fundAddress);

    DataTypes.ReserveConfigurationMap memory currentConfig = pool.getConfiguration();

    currentConfig.setDecimals(input.underlyingAssetDecimals);

    currentConfig.setActive(true);
    currentConfig.setFrozen(false);

    pool.setConfiguration(currentConfig.data);

    emit ReserveInitialized(
      input.underlyingAsset,
      oTokenProxyAddress
    );
  }

  /**
   * @dev Updates the vToken implementation for the reserve
   **/
  function updateOToken(UpdateOTokenInput calldata input) external onlyPoolAdmin {
    ILendingPool cachedPool = pool;

    DataTypes.ReserveData memory reserveData = cachedPool.getReserveData();

    uint256 decimals = cachedPool.getConfiguration().getParamsMemory();

    bytes memory encodedCall = abi.encodeWithSelector(
        IInitializableOToken.initialize.selector,
        cachedPool,
        decimals,
        input.name,
        input.symbol,
        input.params
      );

    _upgradeImplementation(
      reserveData.oTokenAddress,
      input.implementation,
      encodedCall
    );

    emit OTokenUpgraded(reserveData.oTokenAddress, input.implementation);
  }

  function setFundAddress(address fundAddress) external onlyPoolAdmin {
    ILendingPool cachedPool = pool;
    pool.setFuncAddress(fundAddress);
  }

  /**
   * @dev Activates a reserve
   **/
  function activateReserve() external onlyPoolAdmin {
    DataTypes.ReserveConfigurationMap memory currentConfig = pool.getConfiguration();

    currentConfig.setActive(true);

    pool.setConfiguration(currentConfig.data);

    emit ReserveActivated();
  }

  /**
   * @dev Deactivates a reserve
   **/
  function deactivateReserve() external onlyPoolAdmin {

    DataTypes.ReserveConfigurationMap memory currentConfig = pool.getConfiguration();

    currentConfig.setActive(false);

    pool.setConfiguration(currentConfig.data);

    emit ReserveDeactivated();
  }

  /**
   * @dev Freezes a reserve. A frozen reserve doesn't allow any new deposit, borrow
   *  but allows repayments, liquidations, and withdrawals
   **/
  function freezeReserve() external onlyPoolAdmin {
    DataTypes.ReserveConfigurationMap memory currentConfig = pool.getConfiguration();

    currentConfig.setFrozen(true);

    pool.setConfiguration(currentConfig.data);

    emit ReserveFrozen();
  }

  /**
   * @dev Unfreezes a reserve
   **/
  function unfreezeReserve() external onlyPoolAdmin {
    DataTypes.ReserveConfigurationMap memory currentConfig = pool.getConfiguration();

    currentConfig.setFrozen(false);

    pool.setConfiguration(currentConfig.data);

    emit ReserveUnfrozen();
  }

  /**
   * @dev pauses or unpauses all the actions of the protocol, including vToken transfers
   * @param val true if protocol needs to be paused, false otherwise
   **/
  function setPoolPause(bool val) external onlyEmergencyAdmin {
    pool.setPause(val);
  }

  function batchAddToWhitelist(address[] calldata users) external onlyKYCAdmin {
    pool.batchAddToWhitelist(users);
  }

  function addToWhitelist(address user) external onlyKYCAdmin {
    pool.addToWhitelist(user);
  }

  function batchRemoveFromWhitelist(address[] calldata users) external onlyKYCAdmin {
    pool.batchRemoveFromWhitelist(users);
  }

  function removeFromWhitelist(address user) external onlyKYCAdmin {
    pool.removeFromWhitelist(user);
  }

  function setWhitelistExpiration(uint256 expiration) external onlyPoolAdmin {
    pool.setWhitelistExpiration(expiration);
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
