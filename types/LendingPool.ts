/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace DataTypes {
  export type ReserveConfigurationMapStruct = {
    data: PromiseOrValue<BigNumberish>;
  };

  export type ReserveConfigurationMapStructOutput = [BigNumber] & {
    data: BigNumber;
  };

  export type ReserveDataStruct = {
    configuration: DataTypes.ReserveConfigurationMapStruct;
    liquidityIndex: PromiseOrValue<BigNumberish>;
    currentLiquidityRate: PromiseOrValue<BigNumberish>;
    previousLiquidityIndex: PromiseOrValue<BigNumberish>;
    purchaseUpperLimit: PromiseOrValue<BigNumberish>;
    lastUpdateTimestamp: PromiseOrValue<BigNumberish>;
    purchaseBeginTimestamp: PromiseOrValue<BigNumberish>;
    purchaseEndTimestamp: PromiseOrValue<BigNumberish>;
    redemptionBeginTimestamp: PromiseOrValue<BigNumberish>;
    managementFeeRate: PromiseOrValue<BigNumberish>;
    performanceFeeRate: PromiseOrValue<BigNumberish>;
    oTokenAddress: PromiseOrValue<string>;
    fundAddress: PromiseOrValue<string>;
  };

  export type ReserveDataStructOutput = [
    DataTypes.ReserveConfigurationMapStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    number,
    string,
    string
  ] & {
    configuration: DataTypes.ReserveConfigurationMapStructOutput;
    liquidityIndex: BigNumber;
    currentLiquidityRate: BigNumber;
    previousLiquidityIndex: BigNumber;
    purchaseUpperLimit: BigNumber;
    lastUpdateTimestamp: number;
    purchaseBeginTimestamp: number;
    purchaseEndTimestamp: number;
    redemptionBeginTimestamp: number;
    managementFeeRate: number;
    performanceFeeRate: number;
    oTokenAddress: string;
    fundAddress: string;
  };
}

export declare namespace ILendingPool {
  export type InitReserveInputStruct = {
    oTokenImpl: PromiseOrValue<string>;
    underlyingAssetDecimals: PromiseOrValue<BigNumberish>;
    underlyingAsset: PromiseOrValue<string>;
    underlyingAssetName: PromiseOrValue<string>;
    oTokenName: PromiseOrValue<string>;
    oTokenSymbol: PromiseOrValue<string>;
    fundAddress: PromiseOrValue<string>;
    params: PromiseOrValue<BytesLike>;
  };

  export type InitReserveInputStructOutput = [
    string,
    number,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    oTokenImpl: string;
    underlyingAssetDecimals: number;
    underlyingAsset: string;
    underlyingAssetName: string;
    oTokenName: string;
    oTokenSymbol: string;
    fundAddress: string;
    params: string;
  };

  export type UpdateOTokenInputStruct = {
    name: PromiseOrValue<string>;
    symbol: PromiseOrValue<string>;
    implementation: PromiseOrValue<string>;
    params: PromiseOrValue<BytesLike>;
  };

  export type UpdateOTokenInputStructOutput = [
    string,
    string,
    string,
    string
  ] & { name: string; symbol: string; implementation: string; params: string };
}

export interface LendingPoolInterface extends utils.Interface {
  functions: {
    "LENDINGPOOL_REVISION()": FunctionFragment;
    "deposit(uint256,address,uint16)": FunctionFragment;
    "depositFund(uint256)": FunctionFragment;
    "getAddressesProvider()": FunctionFragment;
    "getConfiguration()": FunctionFragment;
    "getReserveData()": FunctionFragment;
    "getReserveNormalizedIncome()": FunctionFragment;
    "initReserve((address,uint8,address,string,string,string,address,bytes))": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializeNextPeroid(uint16,uint16,uint128,uint40,uint40,uint40)": FunctionFragment;
    "paused()": FunctionFragment;
    "setPause(bool)": FunctionFragment;
    "updateFuncAddress(address)": FunctionFragment;
    "updateNetValue(uint256)": FunctionFragment;
    "updateOToken((string,string,address,bytes))": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
    "withdrawFund(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "LENDINGPOOL_REVISION"
      | "deposit"
      | "depositFund"
      | "getAddressesProvider"
      | "getConfiguration"
      | "getReserveData"
      | "getReserveNormalizedIncome"
      | "initReserve"
      | "initialize"
      | "initializeNextPeroid"
      | "paused"
      | "setPause"
      | "updateFuncAddress"
      | "updateNetValue"
      | "updateOToken"
      | "withdraw"
      | "withdrawFund"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "LENDINGPOOL_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveNormalizedIncome",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [ILendingPool.InitReserveInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeNextPeroid",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setPause",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFuncAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateNetValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOToken",
    values: [ILendingPool.UpdateOTokenInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "LENDINGPOOL_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveNormalizedIncome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeNextPeroid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFuncAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateNetValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFund",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,address,uint256,uint16)": EventFragment;
    "FundAddressUpdated(address)": EventFragment;
    "FundDeposit(address,uint256)": EventFragment;
    "FundWithdraw(address,uint256)": EventFragment;
    "OTokenUpgraded(address,address)": EventFragment;
    "Paused()": EventFragment;
    "ReserveInitialized(address)": EventFragment;
    "Unpaused()": EventFragment;
    "Withdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundAddressUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OTokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  onBehalfOf: string;
  amount: BigNumber;
  referral: number;
}
export type DepositEvent = TypedEvent<
  [string, string, BigNumber, number],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface FundAddressUpdatedEventObject {
  newFundAddress: string;
}
export type FundAddressUpdatedEvent = TypedEvent<
  [string],
  FundAddressUpdatedEventObject
>;

export type FundAddressUpdatedEventFilter =
  TypedEventFilter<FundAddressUpdatedEvent>;

export interface FundDepositEventObject {
  from: string;
  amount: BigNumber;
}
export type FundDepositEvent = TypedEvent<
  [string, BigNumber],
  FundDepositEventObject
>;

export type FundDepositEventFilter = TypedEventFilter<FundDepositEvent>;

export interface FundWithdrawEventObject {
  to: string;
  amount: BigNumber;
}
export type FundWithdrawEvent = TypedEvent<
  [string, BigNumber],
  FundWithdrawEventObject
>;

export type FundWithdrawEventFilter = TypedEventFilter<FundWithdrawEvent>;

export interface OTokenUpgradedEventObject {
  proxy: string;
  implementation: string;
}
export type OTokenUpgradedEvent = TypedEvent<
  [string, string],
  OTokenUpgradedEventObject
>;

export type OTokenUpgradedEventFilter = TypedEventFilter<OTokenUpgradedEvent>;

export interface PausedEventObject {}
export type PausedEvent = TypedEvent<[], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ReserveInitializedEventObject {
  oToken: string;
}
export type ReserveInitializedEvent = TypedEvent<
  [string],
  ReserveInitializedEventObject
>;

export type ReserveInitializedEventFilter =
  TypedEventFilter<ReserveInitializedEvent>;

export interface UnpausedEventObject {}
export type UnpausedEvent = TypedEvent<[], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrawEventObject {
  user: string;
  to: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface LendingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendingPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddressesProvider(overrides?: CallOverrides): Promise<[string]>;

    getConfiguration(
      overrides?: CallOverrides
    ): Promise<[DataTypes.ReserveConfigurationMapStructOutput]>;

    getReserveData(
      overrides?: CallOverrides
    ): Promise<[DataTypes.ReserveDataStructOutput]>;

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<[BigNumber]>;

    initReserve(
      input: ILendingPool.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializeNextPeroid(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOToken(
      input: ILendingPool.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    onBehalfOf: PromiseOrValue<string>,
    referralCode: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFund(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddressesProvider(overrides?: CallOverrides): Promise<string>;

  getConfiguration(
    overrides?: CallOverrides
  ): Promise<DataTypes.ReserveConfigurationMapStructOutput>;

  getReserveData(
    overrides?: CallOverrides
  ): Promise<DataTypes.ReserveDataStructOutput>;

  getReserveNormalizedIncome(overrides?: CallOverrides): Promise<BigNumber>;

  initReserve(
    input: ILendingPool.InitReserveInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializeNextPeroid(
    managementFeeRate: PromiseOrValue<BigNumberish>,
    performanceFeeRate: PromiseOrValue<BigNumberish>,
    purchaseUpperLimit: PromiseOrValue<BigNumberish>,
    purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
    purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
    redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  setPause(
    val: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateFuncAddress(
    fundAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateNetValue(
    netValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOToken(
    input: ILendingPool.UpdateOTokenInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFund(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddressesProvider(overrides?: CallOverrides): Promise<string>;

    getConfiguration(
      overrides?: CallOverrides
    ): Promise<DataTypes.ReserveConfigurationMapStructOutput>;

    getReserveData(
      overrides?: CallOverrides
    ): Promise<DataTypes.ReserveDataStructOutput>;

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<BigNumber>;

    initReserve(
      input: ILendingPool.InitReserveInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeNextPeroid(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOToken(
      input: ILendingPool.UpdateOTokenInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Deposit(address,address,uint256,uint16)"(
      user?: PromiseOrValue<string> | null,
      onBehalfOf?: PromiseOrValue<string> | null,
      amount?: null,
      referral?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      onBehalfOf?: PromiseOrValue<string> | null,
      amount?: null,
      referral?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter;

    "FundAddressUpdated(address)"(
      newFundAddress?: PromiseOrValue<string> | null
    ): FundAddressUpdatedEventFilter;
    FundAddressUpdated(
      newFundAddress?: PromiseOrValue<string> | null
    ): FundAddressUpdatedEventFilter;

    "FundDeposit(address,uint256)"(
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): FundDepositEventFilter;
    FundDeposit(
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): FundDepositEventFilter;

    "FundWithdraw(address,uint256)"(
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): FundWithdrawEventFilter;
    FundWithdraw(
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): FundWithdrawEventFilter;

    "OTokenUpgraded(address,address)"(
      proxy?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null
    ): OTokenUpgradedEventFilter;
    OTokenUpgraded(
      proxy?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null
    ): OTokenUpgradedEventFilter;

    "Paused()"(): PausedEventFilter;
    Paused(): PausedEventFilter;

    "ReserveInitialized(address)"(
      oToken?: PromiseOrValue<string> | null
    ): ReserveInitializedEventFilter;
    ReserveInitialized(
      oToken?: PromiseOrValue<string> | null
    ): ReserveInitializedEventFilter;

    "Unpaused()"(): UnpausedEventFilter;
    Unpaused(): UnpausedEventFilter;

    "Withdraw(address,address,uint256)"(
      user?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddressesProvider(overrides?: CallOverrides): Promise<BigNumber>;

    getConfiguration(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveData(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveNormalizedIncome(overrides?: CallOverrides): Promise<BigNumber>;

    initReserve(
      input: ILendingPool.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializeNextPeroid(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOToken(
      input: ILendingPool.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LENDINGPOOL_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      onBehalfOf: PromiseOrValue<string>,
      referralCode: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddressesProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConfiguration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserveData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReserveNormalizedIncome(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initReserve(
      input: ILendingPool.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializeNextPeroid(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateFuncAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateNetValue(
      netValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOToken(
      input: ILendingPool.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
