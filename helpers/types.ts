import { any, string } from "hardhat/internal/core/params/argumentTypes";

export interface SymbolMap<T> {
  [symbol: string]: T;
}

export type eNetwork = eEthereumNetwork;

export enum OnebitVaults {
  proto = 'proto',
}

export enum eEthereumNetwork {
  localhost = 'localhost',
  hardhat = 'hardhat',
  goerli = 'goerli',
  sepolia = 'seploia',
  mainnet = 'mainnet',
}

export enum eContractid {
  VaultAddressesProvider = 'VaultAddressesProvider',
  VaultAddressesProviderRegistry = 'VaultAddressesProviderRegistry',
  MintableERC20 = 'MintableERC20',
  ReserveLogic = 'ReserveLogic',
  Vault = 'Vault',
  VaultConfigurator = 'VaultConfigurator',
  VaultConfiguratorImpl = 'VaultConfiguratorImpl',
  OToken = 'OToken',
  ETH = 'ETH',
  VaultImpl = 'VaultImpl',
  TimelockedExecutor = 'TimelockedExecutor',
}

/*
 * Error messages prefix glossary:
 *  - VL = ValidationLogic
 *  - MATH = Math libraries
 *  - AT = oToken or DebtTokens
 *  - LP = Vault
 *  - VAPR = VaultAddressesProviderRegistry
 *  - LPC = VaultConfiguration
 *  - RL = ReserveLogic
 *  - LPCM = VaultCollateralManager
 *  - P = Pausable
 */
export enum ProtocolErrors {
  //common errors
  CALLER_NOT_VAULT_ADMIN = '33', // 'The caller must be the vault admin'

  //contract specific errors
  VL_INVALID_AMOUNT = '1', // 'Amount must be greater than 0'
  VL_NO_ACTIVE_RESERVE = '2', // 'Action requires an active reserve'
  VL_RESERVE_FROZEN = '3', // 'Action requires an unfrozen reserve'
  VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH = '4', // 'The current liquidity is not enough'
  VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE = '5', // 'User cannot withdraw more than the available balance'
  VL_TRANSFER_NOT_ALLOWED = '6', // 'Transfer cannot be allowed.'
  VL_BORROWING_NOT_ENABLED = '7', // 'Borrowing is not enabled'
  VL_INVALID_INTEREST_RATE_MODE_SELECTED = '8', // 'Invalid interest rate mode selected'
  VL_COLLATERAL_BALANCE_IS_0 = '9', // 'The collateral balance is 0'
  VL_HEALTH_FACTOR_LOWER_THAN_LIQUIDATION_THRESHOLD = '10', // 'Health factor is lesser than the liquidation threshold'
  VL_COLLATERAL_CANNOT_COVER_NEW_BORROW = '11', // 'There is not enough collateral to cover a new borrow'
  VL_STABLE_BORROWING_NOT_ENABLED = '12', // stable borrowing not enabled
  VL_COLLATERAL_SAME_AS_BORROWING_CURRENCY = '13', // collateral is (mostly) the same currency that is being borrowed
  VL_AMOUNT_BIGGER_THAN_MAX_LOAN_SIZE_STABLE = '14', // 'The requested amount is greater than the max loan size in stable rate mode
  VL_NO_DEBT_OF_SELECTED_TYPE = '15', // 'for repayment of stable debt, the user needs to have stable debt, otherwise, he needs to have variable debt'
  VL_NO_EXPLICIT_AMOUNT_TO_REPAY_ON_BEHALF = '16', // 'To repay on behalf of an user an explicit amount to repay is needed'
  VL_NO_STABLE_RATE_LOAN_IN_RESERVE = '17', // 'User does not have a stable rate loan in progress on this reserve'
  VL_NO_VARIABLE_RATE_LOAN_IN_RESERVE = '18', // 'User does not have a variable rate loan in progress on this reserve'
  VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0 = '19', // 'The underlying balance needs to be greater than 0'
  VL_DEPOSIT_ALREADY_IN_USE = '20', // 'User deposit is already being used as collateral'
  V_NOT_ENOUGH_STABLE_BORROW_BALANCE = '21', // 'User does not have any stable rate loan for this reserve'
  V_INTEREST_RATE_REBALANCE_CONDITIONS_NOT_MET = '22', // 'Interest rate rebalance conditions were not met'
  V_LIQUIDATION_CALL_FAILED = '23', // 'Liquidation call failed'
  V_NOT_ENOUGH_LIQUIDITY_TO_BORROW = '24', // 'There is not enough liquidity available to borrow'
  V_REQUESTED_AMOUNT_TOO_SMALL = '25', // 'The requested amount is too small for a FlashLoan.'
  V_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE = '26', // 'The actual balance of the protocol is inconsistent'
  V_CALLER_NOT_VAULT_CONFIGURATOR = '27', // 'The caller is not the vault configurator'
  V_INCONSISTENT_FLASHLOAN_PARAMS = '28',
  CT_CALLER_MUST_BE_VAULT = '29', // 'The caller of this function must be a vault'
  CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF = '30', // 'User cannot give allowance to himself'
  CT_TRANSFER_AMOUNT_NOT_GT_0 = '31', // 'Transferred amount needs to be greater than zero'
  RL_RESERVE_ALREADY_INITIALIZED = '32', // 'Reserve has already been initialized'
  VPC_RESERVE_LIQUIDITY_NOT_0 = '34', // 'The liquidity of the reserve needs to be 0'
    VPC_INVALID_OTOKEN_VAULT_ADDRESS = '35', // 'The liquidity of the reserve needs to be 0'
  VPC_INVALID_STABLE_DEBT_TOKEN_VAULT_ADDRESS = '36', // 'The liquidity of the reserve needs to be 0'
  VPC_INVALID_VARIABLE_DEBT_TOKEN_VAULT_ADDRESS = '37', // 'The liquidity of the reserve needs to be 0'
  VPC_INVALID_STABLE_DEBT_TOKEN_UNDERLYING_ADDRESS = '38', // 'The liquidity of the reserve needs to be 0'
  VPC_INVALID_VARIABLE_DEBT_TOKEN_UNDERLYING_ADDRESS = '39', // 'The liquidity of the reserve needs to be 0'
  VPC_INVALID_ADDRESSES_PROVIDER_ID = '40', // 'The liquidity of the reserve needs to be 0'
  VPC_CALLER_NOT_EMERGENCY_ADMIN = '76', // 'The caller must be the emergencya admin'
  VAPR_PROVIDER_NOT_REGISTERED = '41', // 'Provider is not registered'
  VCM_HEALTH_FACTOR_NOT_BELOW_THRESHOLD = '42', // 'Health factor is not below the threshold'
  VCM_COLLATERAL_CANNOT_BE_LIQUIDATED = '43', // 'The collateral chosen cannot be liquidated'
  VCM_SPECIFIED_CURRENCY_NOT_BORROWED_BY_USER = '44', // 'User did not borrow the specified currency'
  VCM_NOT_ENOUGH_LIQUIDITY_TO_LIQUIDATE = '45', // "There isn't enough liquidity available to liquidate"
  VCM_NO_ERRORS = '46', // 'No errors'
  V_INVALID_FLASHLOAN_MODE = '47', //Invalid flashloan mode selected
  MATH_MULTIPLICATION_OVERFLOW = '48',
  MATH_ADDITION_OVERFLOW = '49',
  MATH_DIVISION_BY_ZERO = '50',
  RL_LIQUIDITY_INDEX_OVERFLOW = '51', //  Liquidity index overflows uint128
  RL_VARIABLE_BORROW_INDEX_OVERFLOW = '52', //  Variable borrow index overflows uint128
  RL_LIQUIDITY_RATE_OVERFLOW = '53', //  Liquidity rate overflows uint128
  RL_VARIABLE_BORROW_RATE_OVERFLOW = '54', //  Variable borrow rate overflows uint128
  RL_STABLE_BORROW_RATE_OVERFLOW = '55', //  Stable borrow rate overflows uint128
  CT_INVALID_MINT_AMOUNT = '56', //invalid amount to mint
  V_FAILED_REPAY_WITH_COLLATERAL = '57',
  CT_INVALID_BURN_AMOUNT = '58', //invalid amount to burn
  V_BORROW_ALLOWANCE_NOT_ENOUGH = '59', // User borrows on behalf, but allowance are too small
  V_FAILED_COLLATERAL_SWAP = '60',
  V_INVALID_EQUAL_ASSETS_TO_SWAP = '61',
  V_REENTRANCY_NOT_ALLOWED = '62',
    V_CALLER_MUST_BE_AN_OTOKEN = '63',
  V_IS_PAUSED = '64', // 'Vault is paused'
  V_NO_MORE_RESERVES_ALLOWED = '65',
  V_INVALID_FLASH_LOAN_EXECUTOR_RETURN = '66',
  RC_INVALID_LTV = '67',
  RC_INVALID_LIQ_THRESHOLD = '68',
  RC_INVALID_LIQ_BONUS = '69',
  RC_INVALID_DECIMALS = '70',
  RC_INVALID_RESERVE_FACTOR = '71',
  VAPR_INVALID_ADDRESSES_PROVIDER_ID = '72',

  // old

  INVALID_FROM_BALANCE_AFTER_TRANSFER = 'Invalid from balance after transfer',
  INVALID_TO_BALANCE_AFTER_TRANSFER = 'Invalid from balance after transfer',
  INVALID_OWNER_REVERT_MSG = 'Ownable: caller is not the owner',
  INVALID_HF = 'Invalid health factor',
  TRANSFER_AMOUNT_EXCEEDS_BALANCE = 'ERC20: transfer amount exceeds balance',
  SAFEERC20_LOWLEVEL_CALL = 'GPv2SafeERC20: low-level call failed',
}

export type tEthereumAddress = string;
export type tStringTokenSmallUnits = string; // 1 wei, or 1 basic unit of USDC, or 1 basic unit of DAI

export type iAssetsWithoutETH<T> = Omit<iAssetBase<T>, 'ETH'>;

export type iAssetAggregatorBase<T> = iAssetsWithoutETH<T>;

export enum TokenContractId {
    WETH = 'WETH',
    DAI = 'DAI',
  };

export interface iAssetBase<T> {
  DAI: T;
  USD: T;
  WETH: T;
  BAYC: T;
  //CRYPTOPANDA: T;
  MAYC: T;
  CloneX: T;
  MEKA: T;
  Azuki: T;
  DOODLE: T;
  Sandbox: T;
  OTHR: T;
  PUNK: T;
  DLAND: T;
  Meebits: T;
  MOONBIRD: T;
}

export interface IReserveParams {
  name: string;
  symbol: string;
  oTokenImpl: eContractid;
}

export interface iParamsPerVault<T> {
  [OnebitVaults.proto]: T;
}

export interface IProtocolGlobalConfig {
  TokenDistributorPercentageBase: string;
  MockUsdPriceInWei: string;
  UsdAddress: tEthereumAddress;
  NilAddress: tEthereumAddress;
  OneAddress: tEthereumAddress;
  AaveReferral: string;
}

export interface IBaseConfiguration {
  MarketId: string;
  OTokenNamePrefix: string;
  SymbolPrefix: string;
  ProviderId: number;
  ProtocolGlobalParams: IProtocolGlobalConfig;
  ProviderRegistry: iParamsPerNetwork<tEthereumAddress | undefined>;
  ProviderRegistryOwner: iParamsPerNetwork<tEthereumAddress | undefined>;
  Vault: iParamsPerNetwork<tEthereumAddress>;
  VaultAdmin: iParamsPerNetwork<tEthereumAddress | undefined>;
  VaultAdminIndex: number;
  EmergencyAdmin: iParamsPerNetwork<tEthereumAddress | undefined>;
  EmergencyAdminIndex: number;
  OTokenDomainSeparator: iParamsPerNetwork<string>;
  ReserveAssets: iParamsPerNetwork<SymbolMap<tEthereumAddress>>;
}

export interface IMocksConfig {
  AllAssetsInitialPrices: iAssetBase<string>;
}

export interface ICommonConfiguration extends IBaseConfiguration {
  ReserveConfig: IReserveParams;
  Mocks: IMocksConfig;
}

export type iParamsPerNetwork<T> =
  | iEthereumParamsPerNetwork<T>;

export interface iEthereumParamsPerNetwork<T> {
  [eEthereumNetwork.localhost]: T;
  [eEthereumNetwork.hardhat]: T;
  [eEthereumNetwork.goerli]: T;
  [eEthereumNetwork.sepolia]: T;
  [eEthereumNetwork.mainnet]: T;
}

export interface iParamsBuilderPerNetwork<T> {
  [eEthereumNetwork.localhost]?: T;
  [eEthereumNetwork.hardhat]?: T;
  [eEthereumNetwork.goerli]?: T;
  [eEthereumNetwork.sepolia]?: T;
  [eEthereumNetwork.mainnet]?: T;
}

export interface ITokenAddress {
  [token: string]: tEthereumAddress;
}

export type VaultConfiguration = ICommonConfiguration;