// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {ILendingPool} from './ILendingPool.sol';

/**
 * @title IInitializableOToken
 * @notice Interface for the initialize function on OToken
 * @author Aave
 * @author Onebit
 **/
interface IInitializableOToken {
  /**
   * @dev Emitted when an vToken is initialized
   * @param underlyingAsset The address of the underlying asset
   * @param pool The address of the associated lending pool
   * @param oTokenDecimals the decimals of the underlying
   * @param oTokenName the name of the vToken
   * @param oTokenSymbol the symbol of the vToken
   * @param params A set of encoded parameters for additional initialization
   **/
  event Initialized(
    address indexed underlyingAsset,
    address indexed pool,
    uint8 oTokenDecimals,
    string oTokenName,
    string oTokenSymbol,
    bytes params
  );

  /**
   * @dev Initializes the vToken
   * @param pool The address of the lending pool where this vToken will be used
   * @param underlyingAsset The address of the underlying asset of this vToken (E.g. WETH for aWETH)
   * @param oTokenDecimals The decimals of the vToken, same as the underlying asset's
   * @param oTokenName The name of the vToken
   * @param oTokenSymbol The symbol of the vToken
   */
  function initialize(
    ILendingPool pool,
    address underlyingAsset,
    uint8 oTokenDecimals,
    string calldata oTokenName,
    string calldata oTokenSymbol,
    bytes calldata params
  ) external;
}
