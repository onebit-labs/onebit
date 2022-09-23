// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {IERC20} from '../../dependencies/openzeppelin/contracts/IERC20.sol';
import {GPv2SafeERC20} from '../../dependencies/gnosis/contracts/GPv2SafeERC20.sol';
import {IOToken} from '../../interfaces/IOToken.sol';
import {ReserveConfiguration} from '../configuration/ReserveConfiguration.sol';
import {MathUtils} from '../math/MathUtils.sol';
import {WadRayMath} from '../math/WadRayMath.sol';
import {PercentageMath} from '../math/PercentageMath.sol';
import {Errors} from '../helpers/Errors.sol';
import {DataTypes} from '../types/DataTypes.sol';

/**
 * @title ReserveLogic library
 * @author Aave
 * @notice Implements the logic to update the reserves state
 */
library ReserveLogic {
  using WadRayMath for uint256;
  using PercentageMath for uint256;
  using GPv2SafeERC20 for IERC20;

  /**
   * @dev Emitted when the state of a reserve is updated
   * @param asset The address of the underlying asset of the reserve
   * @param liquidityRate The new liquidity rate
   * @param liquidityIndex The new liquidity index
   **/
  event ReserveDataUpdated(
    address indexed asset,
    uint256 liquidityRate,
    uint256 liquidityIndex
  );

  using ReserveLogic for DataTypes.ReserveData;
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;

  /**
   * @dev Returns the ongoing normalized income for the reserve
   * A value of 1e27 means there is no income. As time passes, the income is accrued
   * A value of 2*1e27 means for each unit of asset one unit of income has been accrued
   * @param reserve The reserve object
   * @return the normalized income. expressed in ray
   **/
  function getNormalizedIncome(DataTypes.ReserveData storage reserve)
    internal
    view
    returns (uint256)
  {
    uint40 timestamp = reserve.lastUpdateTimestamp;
    uint40 currentTimestamp = uint40(block.timestamp);

    if(currentTimestamp > reserve.redemptionBeginTimestamp){
      currentTimestamp = reserve.redemptionBeginTimestamp;
    }
    if((currentTimestamp > timestamp) && (currentTimestamp > reserve.purchaseEndTimestamp)){
      return MathUtils.calculateLinearInterest(reserve.currentLiquidityRate, currentTimestamp, timestamp).rayMul(reserve.liquidityIndex);
    }
    else{
      return reserve.liquidityIndex;
    }
  }

  /**
   * @dev Initializes a reserve
   * @param reserve The reserve object
   * @param oTokenAddress The address of the overlying vtoken contract
   **/
  function init(
    DataTypes.ReserveData storage reserve,
    address oTokenAddress,
    address fundAddress
  ) external {
    require(reserve.oTokenAddress == address(0), Errors.RL_RESERVE_ALREADY_INITIALIZED);
    reserve.liquidityIndex = uint128(WadRayMath.ray());
    reserve.oTokenAddress = oTokenAddress;
    reserve.fundAddress = fundAddress;
  }

  function updateNetValue(DataTypes.ReserveData storage reserve, uint256 netValue, uint256 oldNetValue, uint256 currentTimestamp)
    internal
  {
    uint256 timedelta = currentTimestamp - uint256(reserve.purchaseEndTimestamp);
    uint256 managementFee = PercentageMath.percentMul(netValue, reserve.managementFeeRate) * timedelta / MathUtils.SECONDS_PER_YEAR;
    uint256 performanceFee = 0;
    if(netValue > oldNetValue){
      performanceFee = PercentageMath.percentMul(netValue - oldNetValue, reserve.performanceFeeRate);
    }
    uint256 newNetValue = netValue - managementFee - performanceFee;
    uint256 currentLiquidityRate = newNetValue.rayDiv(oldNetValue);
    reserve.liquidityIndex = uint128(currentLiquidityRate.rayMul(reserve.previousLiquidityIndex));
    reserve.currentLiquidityRate = uint128((currentLiquidityRate - WadRayMath.ray()) * MathUtils.SECONDS_PER_YEAR / timedelta);
  }
}
