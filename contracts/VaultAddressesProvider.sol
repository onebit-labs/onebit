// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {Ownable} from './dependencies/openzeppelin/contracts/Ownable.sol';

// Prettier ignore to prevent buidler flatter bug
// prettier-ignore
import {InitializableImmutableAdminUpgradeabilityProxy} from './libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol';

import {IVaultAddressesProvider} from './interfaces/IVaultAddressesProvider.sol';

/**
 * @title VaultAddressesProvider contract
 * @dev Main registry of addresses part of or connected to the protocol, including permissioned roles
 * - Acting also as factory of proxies and admin of those, so with right to change its implementations
 * - Owned by the Onebit Governance
 * @author Aave
 * @author Onebit
 **/
contract VaultAddressesProvider is Ownable, IVaultAddressesProvider {
  string private _marketId;
  mapping(bytes32 => address) private _addresses;

  bytes32 private constant VAULT = 'VAULT';
  bytes32 private constant VAULT_CONFIGURATOR = 'VAULT_CONFIGURATOR';
  bytes32 private constant VAULT_OPERATOR = 'VAULT_OPERATOR';
  bytes32 private constant VAULT_ADMIN = 'VAULT_ADMIN';
  bytes32 private constant EMERGENCY_ADMIN = 'EMERGENCY_ADMIN';
  bytes32 private constant KYC_ADMIN = 'KYC_ADMIN';
  bytes32 private constant PORTFOLIO_MANAGER = 'PORTFOLIO_MANAGER';
  bytes32 private constant OTOKEN = 'OTOKEN';
  
  constructor(string memory marketId) public {
    _setMarketId(marketId);
  }

  /**
   * @dev Returns the id of the Aave market to which this contracts points to
   * @return The market id
   **/
  function getMarketId() external view override returns (string memory) {
    return _marketId;
  }

  /**
   * @dev Allows to set the market which this VaultAddressesProvider represents
   * @param marketId The market id
   */
  function setMarketId(string memory marketId) external override onlyOwner {
    _setMarketId(marketId);
  }

  /**
   * @dev General function to update the implementation of a proxy registered with
   * certain `id`. If there is no proxy registered, it will instantiate one and
   * set as implementation the `implementationAddress`
   * IMPORTANT Use this function carefully, only for ids that don't have an explicit
   * setter function, in order to avoid unexpected consequences
   * @param id The id
   * @param implementationAddress The address of the new implementation
   */
  function setAddressAsProxy(bytes32 id, address implementationAddress)
    external
    override
    onlyOwner
  {
    _updateImpl(id, implementationAddress);
    emit AddressSet(id, implementationAddress, true);
  }

  /**
   * @dev Sets an address for an id replacing the address saved in the addresses map
   * IMPORTANT Use this function carefully, as it will do a hard replacement
   * @param id The id
   * @param newAddress The address to set
   */
  function setAddress(bytes32 id, address newAddress) external override onlyOwner {
    _addresses[id] = newAddress;
    emit AddressSet(id, newAddress, false);
  }

  /**
   * @dev Returns an address by id
   * @return The address
   */
  function getAddress(bytes32 id) public view override returns (address) {
    return _addresses[id];
  }

  /**
   * @dev Returns the address of the Vault proxy
   * @return The Vault proxy address
   **/
  function getVault() external view override returns (address) {
    return getAddress(VAULT);
  }

  /**
   * @dev Updates the implementation of the Vault, or creates the proxy
   * setting the new `vault` implementation on the first time calling it
   * @param vault The new Vault implementation
   **/
  function setVaultImpl(address vault) external override onlyOwner {
    _updateImpl(VAULT, vault);
    emit VaultUpdated(vault);
  }

  /**
   * @dev Returns the address of the VaultConfigurator proxy
   * @return The VaultConfigurator proxy address
   **/
  function getVaultConfigurator() external view override returns (address) {
    return getAddress(VAULT_CONFIGURATOR);
  }

  /**
   * @dev Updates the implementation of the VaultConfigurator, or creates the proxy
   * setting the new `configurator` implementation on the first time calling it
   * @param configurator The new VaultConfigurator implementation
   **/
  function setVaultConfiguratorImpl(address configurator) external override onlyOwner {
    _updateImpl(VAULT_CONFIGURATOR, configurator);
    emit VaultConfiguratorUpdated(configurator);
  }

  /**
   * @dev Returns the address of the VaultOperator
   * @return The VaultOperator address
   **/
  function getVaultOperator() external view override returns (address) {
    return getAddress(VAULT_OPERATOR);
  }


  function setVaultOperator(address operator) external override onlyOwner {
    _addresses[VAULT_OPERATOR] = operator;
    emit VaultOperatorUpdated(operator);
  }

  /**
   * @dev The functions below are getters/setters of addresses that are outside the context
   * of the protocol hence the upgradable proxy pattern is not used
   **/

  function getVaultAdmin() external view override returns (address) {
    return getAddress(VAULT_ADMIN);
  }

  function setVaultAdmin(address admin) external override onlyOwner {
    _addresses[VAULT_ADMIN] = admin;
    emit ConfigurationAdminUpdated(admin);
  }

  function getEmergencyAdmin() external view override returns (address) {
    return getAddress(EMERGENCY_ADMIN);
  }

  function setEmergencyAdmin(address emergencyAdmin) external override onlyOwner {
    _addresses[EMERGENCY_ADMIN] = emergencyAdmin;
    emit EmergencyAdminUpdated(emergencyAdmin);
  }

  function getKYCAdmin() external view override returns (address) {
    return getAddress(KYC_ADMIN);
  }

  function setKYCAdmin(address kycAdmin) external override onlyOwner {
    _addresses[KYC_ADMIN] = kycAdmin;
    emit KYCAdminUpdated(kycAdmin);
  }

  function getPortfolioManager() external view override returns (address) {
    return getAddress(PORTFOLIO_MANAGER);
  }

  function setPortfolioManager(address portfolioManager) external override onlyOwner {
    _addresses[PORTFOLIO_MANAGER] = portfolioManager;
    emit PortfolioManagerUpdated(portfolioManager);
  }

  /**
   * @dev Internal function to update the implementation of a specific proxied component of the protocol
   * - If there is no proxy registered in the given `id`, it creates the proxy setting `newAdress`
   *   as implementation and calls the initialize() function on the proxy
   * - If there is already a proxy registered, it just updates the implementation to `newAddress` and
   *   calls the initialize() function via upgradeToAndCall() in the proxy
   * @param id The id of the proxy to be updated
   * @param newAddress The address of the new implementation
   **/
  function _updateImpl(bytes32 id, address newAddress) internal {
    address payable proxyAddress = payable(_addresses[id]);

    InitializableImmutableAdminUpgradeabilityProxy proxy =
      InitializableImmutableAdminUpgradeabilityProxy(proxyAddress);
    bytes memory params = abi.encodeWithSignature('initialize(address)', address(this));

    if (proxyAddress == address(0)) {
      proxy = new InitializableImmutableAdminUpgradeabilityProxy(address(this));
      proxy.initialize(newAddress, params);
      _addresses[id] = address(proxy);
      emit ProxyCreated(id, address(proxy));
    } else {
      proxy.upgradeToAndCall(newAddress, params);
    }
  }

  function _setMarketId(string memory marketId) internal {
    _marketId = marketId;
    emit MarketIdSet(marketId);
  }
}
