// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {ReserveLogic} from './libraries/logic/ReserveLogic.sol';
import {ReserveConfiguration} from './libraries/configuration/ReserveConfiguration.sol';
import {ILendingPoolAddressesProvider} from './interfaces/ILendingPoolAddressesProvider.sol';
import {DataTypes} from './libraries/types/DataTypes.sol';

contract LendingPoolStorage {
  using ReserveLogic for DataTypes.ReserveData;

  ILendingPoolAddressesProvider internal _addressesProvider;

  DataTypes.ReserveData internal _reserve;

  bool internal _paused;

  uint256 internal _whitelistExpiration;

  mapping ( address => uint256 ) internal _whitelist;
}
