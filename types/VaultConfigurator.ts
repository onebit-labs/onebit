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

export declare namespace IVaultConfigurator {
  export type InitReserveInputStruct = {
    oTokenImpl: PromiseOrValue<string>;
    underlyingAssetDecimals: PromiseOrValue<BigNumberish>;
    underlyingAsset: PromiseOrValue<string>;
    fundAddress: PromiseOrValue<string>;
    underlyingAssetName: PromiseOrValue<string>;
    oTokenName: PromiseOrValue<string>;
    oTokenSymbol: PromiseOrValue<string>;
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
    fundAddress: string;
    underlyingAssetName: string;
    oTokenName: string;
    oTokenSymbol: string;
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

export interface VaultConfiguratorInterface extends utils.Interface {
  functions: {
    "activateReserve()": FunctionFragment;
    "addToWhitelist(address)": FunctionFragment;
    "batchAddToWhitelist(address[])": FunctionFragment;
    "batchRemoveFromWhitelist(address[])": FunctionFragment;
    "deactivateReserve()": FunctionFragment;
    "freezeReserve()": FunctionFragment;
    "initReserve((address,uint8,address,address,string,string,string,bytes))": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializeNextPeriod(uint16,uint16,uint128,uint128,uint40,uint40,uint40)": FunctionFragment;
    "moveTheLockPeriod(uint40)": FunctionFragment;
    "moveThePurchasePeriod(uint40)": FunctionFragment;
    "moveTheRedemptionPeriod(uint40)": FunctionFragment;
    "removeFromWhitelist(address)": FunctionFragment;
    "setFundAddress(address)": FunctionFragment;
    "setVaultPause(bool)": FunctionFragment;
    "setWhitelistExpiration(uint256)": FunctionFragment;
    "unfreezeReserve()": FunctionFragment;
    "updateOToken((string,string,address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateReserve"
      | "addToWhitelist"
      | "batchAddToWhitelist"
      | "batchRemoveFromWhitelist"
      | "deactivateReserve"
      | "freezeReserve"
      | "initReserve"
      | "initialize"
      | "initializeNextPeriod"
      | "moveTheLockPeriod"
      | "moveThePurchasePeriod"
      | "moveTheRedemptionPeriod"
      | "removeFromWhitelist"
      | "setFundAddress"
      | "setVaultPause"
      | "setWhitelistExpiration"
      | "unfreezeReserve"
      | "updateOToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "batchAddToWhitelist",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRemoveFromWhitelist",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "freezeReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [IVaultConfigurator.InitReserveInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeNextPeriod",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "moveTheLockPeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "moveThePurchasePeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "moveTheRedemptionPeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFundAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVaultPause",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistExpiration",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezeReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateOToken",
    values: [IVaultConfigurator.UpdateOTokenInputStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchAddToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchRemoveFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeNextPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveTheLockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveThePurchasePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveTheRedemptionPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVaultPause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistExpiration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOToken",
    data: BytesLike
  ): Result;

  events: {
    "OTokenUpgraded(address,address)": EventFragment;
    "ReserveActivated()": EventFragment;
    "ReserveDeactivated()": EventFragment;
    "ReserveFrozen()": EventFragment;
    "ReserveInitialized(address,address)": EventFragment;
    "ReserveUnfrozen()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OTokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveUnfrozen"): EventFragment;
}

export interface OTokenUpgradedEventObject {
  proxy: string;
  implementation: string;
}
export type OTokenUpgradedEvent = TypedEvent<
  [string, string],
  OTokenUpgradedEventObject
>;

export type OTokenUpgradedEventFilter = TypedEventFilter<OTokenUpgradedEvent>;

export interface ReserveActivatedEventObject {}
export type ReserveActivatedEvent = TypedEvent<[], ReserveActivatedEventObject>;

export type ReserveActivatedEventFilter =
  TypedEventFilter<ReserveActivatedEvent>;

export interface ReserveDeactivatedEventObject {}
export type ReserveDeactivatedEvent = TypedEvent<
  [],
  ReserveDeactivatedEventObject
>;

export type ReserveDeactivatedEventFilter =
  TypedEventFilter<ReserveDeactivatedEvent>;

export interface ReserveFrozenEventObject {}
export type ReserveFrozenEvent = TypedEvent<[], ReserveFrozenEventObject>;

export type ReserveFrozenEventFilter = TypedEventFilter<ReserveFrozenEvent>;

export interface ReserveInitializedEventObject {
  asset: string;
  oToken: string;
}
export type ReserveInitializedEvent = TypedEvent<
  [string, string],
  ReserveInitializedEventObject
>;

export type ReserveInitializedEventFilter =
  TypedEventFilter<ReserveInitializedEvent>;

export interface ReserveUnfrozenEventObject {}
export type ReserveUnfrozenEvent = TypedEvent<[], ReserveUnfrozenEventObject>;

export type ReserveUnfrozenEventFilter = TypedEventFilter<ReserveUnfrozenEvent>;

export interface VaultConfigurator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultConfiguratorInterface;

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
    activateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addToWhitelist(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchAddToWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchRemoveFromWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deactivateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    freezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initReserve(
      input: IVaultConfigurator.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    moveThePurchasePeriod(
      newPurchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeFromWhitelist(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVaultPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWhitelistExpiration(
      expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unfreezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOToken(
      input: IVaultConfigurator.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  activateReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addToWhitelist(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchAddToWhitelist(
    users: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchRemoveFromWhitelist(
    users: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deactivateReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  freezeReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initReserve(
    input: IVaultConfigurator.InitReserveInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializeNextPeriod(
    managementFeeRate: PromiseOrValue<BigNumberish>,
    performanceFeeRate: PromiseOrValue<BigNumberish>,
    purchaseUpperLimit: PromiseOrValue<BigNumberish>,
    softUpperLimit: PromiseOrValue<BigNumberish>,
    purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
    purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
    redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  moveTheLockPeriod(
    newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  moveThePurchasePeriod(
    newPurchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  moveTheRedemptionPeriod(
    newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeFromWhitelist(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFundAddress(
    fundAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVaultPause(
    val: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWhitelistExpiration(
    expiration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unfreezeReserve(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOToken(
    input: IVaultConfigurator.UpdateOTokenInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateReserve(overrides?: CallOverrides): Promise<void>;

    addToWhitelist(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    batchAddToWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchRemoveFromWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateReserve(overrides?: CallOverrides): Promise<void>;

    freezeReserve(overrides?: CallOverrides): Promise<void>;

    initReserve(
      input: IVaultConfigurator.InitReserveInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    moveThePurchasePeriod(
      newPurchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeFromWhitelist(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVaultPause(
      val: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelistExpiration(
      expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unfreezeReserve(overrides?: CallOverrides): Promise<void>;

    updateOToken(
      input: IVaultConfigurator.UpdateOTokenInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OTokenUpgraded(address,address)"(
      proxy?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null
    ): OTokenUpgradedEventFilter;
    OTokenUpgraded(
      proxy?: PromiseOrValue<string> | null,
      implementation?: PromiseOrValue<string> | null
    ): OTokenUpgradedEventFilter;

    "ReserveActivated()"(): ReserveActivatedEventFilter;
    ReserveActivated(): ReserveActivatedEventFilter;

    "ReserveDeactivated()"(): ReserveDeactivatedEventFilter;
    ReserveDeactivated(): ReserveDeactivatedEventFilter;

    "ReserveFrozen()"(): ReserveFrozenEventFilter;
    ReserveFrozen(): ReserveFrozenEventFilter;

    "ReserveInitialized(address,address)"(
      asset?: PromiseOrValue<string> | null,
      oToken?: PromiseOrValue<string> | null
    ): ReserveInitializedEventFilter;
    ReserveInitialized(
      asset?: PromiseOrValue<string> | null,
      oToken?: PromiseOrValue<string> | null
    ): ReserveInitializedEventFilter;

    "ReserveUnfrozen()"(): ReserveUnfrozenEventFilter;
    ReserveUnfrozen(): ReserveUnfrozenEventFilter;
  };

  estimateGas: {
    activateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addToWhitelist(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchAddToWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchRemoveFromWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deactivateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    freezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initReserve(
      input: IVaultConfigurator.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    moveThePurchasePeriod(
      newPurchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeFromWhitelist(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVaultPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWhitelistExpiration(
      expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unfreezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOToken(
      input: IVaultConfigurator.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addToWhitelist(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchAddToWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchRemoveFromWhitelist(
      users: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deactivateReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    freezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initReserve(
      input: IVaultConfigurator.InitReserveInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializeNextPeriod(
      managementFeeRate: PromiseOrValue<BigNumberish>,
      performanceFeeRate: PromiseOrValue<BigNumberish>,
      purchaseUpperLimit: PromiseOrValue<BigNumberish>,
      softUpperLimit: PromiseOrValue<BigNumberish>,
      purchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      purchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      redemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    moveTheLockPeriod(
      newPurchaseEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    moveThePurchasePeriod(
      newPurchaseBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    moveTheRedemptionPeriod(
      newRedemptionBeginTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeFromWhitelist(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFundAddress(
      fundAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVaultPause(
      val: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelistExpiration(
      expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unfreezeReserve(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOToken(
      input: IVaultConfigurator.UpdateOTokenInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
