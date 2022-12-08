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
  PayableOverrides,
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
} from "../common";

export interface ITimelockedExecutorInterface extends utils.Interface {
  functions: {
    "GRACE_PERIOD()": FunctionFragment;
    "MAXIMUM_DELAY()": FunctionFragment;
    "MINIMUM_DELAY()": FunctionFragment;
    "cancelTransaction(address,uint256,string,bytes,uint256,bool)": FunctionFragment;
    "executeTransaction(address,uint256,string,bytes,uint256,bool)": FunctionFragment;
    "getAdmin()": FunctionFragment;
    "getDelay()": FunctionFragment;
    "getPendingAdmin()": FunctionFragment;
    "isActionQueued(bytes32)": FunctionFragment;
    "queueTransaction(address,uint256,string,bytes,uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "GRACE_PERIOD"
      | "MAXIMUM_DELAY"
      | "MINIMUM_DELAY"
      | "cancelTransaction"
      | "executeTransaction"
      | "getAdmin"
      | "getDelay"
      | "getPendingAdmin"
      | "isActionQueued"
      | "queueTransaction"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "GRACE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "getAdmin", values?: undefined): string;
  encodeFunctionData(functionFragment: "getDelay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isActionQueued",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "queueTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "GRACE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDelay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActionQueued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueTransaction",
    data: BytesLike
  ): Result;

  events: {
    "CancelledAction(bytes32,address,uint256,string,bytes,uint256,bool)": EventFragment;
    "ExecutedAction(bytes32,address,uint256,string,bytes,uint256,bool,bytes)": EventFragment;
    "NewAdmin(address)": EventFragment;
    "NewDelay(uint256)": EventFragment;
    "NewPendingAdmin(address)": EventFragment;
    "QueuedAction(bytes32,address,uint256,string,bytes,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelledAction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutedAction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDelay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QueuedAction"): EventFragment;
}

export interface CancelledActionEventObject {
  actionHash: string;
  target: string;
  value: BigNumber;
  signature: string;
  data: string;
  executionTime: BigNumber;
  withDelegatecall: boolean;
}
export type CancelledActionEvent = TypedEvent<
  [string, string, BigNumber, string, string, BigNumber, boolean],
  CancelledActionEventObject
>;

export type CancelledActionEventFilter = TypedEventFilter<CancelledActionEvent>;

export interface ExecutedActionEventObject {
  actionHash: string;
  target: string;
  value: BigNumber;
  signature: string;
  data: string;
  executionTime: BigNumber;
  withDelegatecall: boolean;
  resultData: string;
}
export type ExecutedActionEvent = TypedEvent<
  [string, string, BigNumber, string, string, BigNumber, boolean, string],
  ExecutedActionEventObject
>;

export type ExecutedActionEventFilter = TypedEventFilter<ExecutedActionEvent>;

export interface NewAdminEventObject {
  newAdmin: string;
}
export type NewAdminEvent = TypedEvent<[string], NewAdminEventObject>;

export type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;

export interface NewDelayEventObject {
  delay: BigNumber;
}
export type NewDelayEvent = TypedEvent<[BigNumber], NewDelayEventObject>;

export type NewDelayEventFilter = TypedEventFilter<NewDelayEvent>;

export interface NewPendingAdminEventObject {
  newPendingAdmin: string;
}
export type NewPendingAdminEvent = TypedEvent<
  [string],
  NewPendingAdminEventObject
>;

export type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;

export interface QueuedActionEventObject {
  actionHash: string;
  target: string;
  value: BigNumber;
  signature: string;
  data: string;
  executionTime: BigNumber;
  withDelegatecall: boolean;
}
export type QueuedActionEvent = TypedEvent<
  [string, string, BigNumber, string, string, BigNumber, boolean],
  QueuedActionEventObject
>;

export type QueuedActionEventFilter = TypedEventFilter<QueuedActionEvent>;

export interface ITimelockedExecutor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITimelockedExecutorInterface;

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
    GRACE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    cancelTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAdmin(overrides?: CallOverrides): Promise<[string]>;

    getDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    isActionQueued(
      actionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    queueTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

  cancelTransaction(
    target: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    executionTime: PromiseOrValue<BigNumberish>,
    withDelegatecall: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransaction(
    target: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    executionTime: PromiseOrValue<BigNumberish>,
    withDelegatecall: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAdmin(overrides?: CallOverrides): Promise<string>;

  getDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getPendingAdmin(overrides?: CallOverrides): Promise<string>;

  isActionQueued(
    actionHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  queueTransaction(
    target: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    executionTime: PromiseOrValue<BigNumberish>,
    withDelegatecall: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    cancelTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string>;

    executeTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAdmin(overrides?: CallOverrides): Promise<string>;

    getDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingAdmin(overrides?: CallOverrides): Promise<string>;

    isActionQueued(
      actionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queueTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "CancelledAction(bytes32,address,uint256,string,bytes,uint256,bool)"(
      actionHash?: null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      signature?: null,
      data?: null,
      executionTime?: null,
      withDelegatecall?: null
    ): CancelledActionEventFilter;
    CancelledAction(
      actionHash?: null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      signature?: null,
      data?: null,
      executionTime?: null,
      withDelegatecall?: null
    ): CancelledActionEventFilter;

    "ExecutedAction(bytes32,address,uint256,string,bytes,uint256,bool,bytes)"(
      actionHash?: null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      signature?: null,
      data?: null,
      executionTime?: null,
      withDelegatecall?: null,
      resultData?: null
    ): ExecutedActionEventFilter;
    ExecutedAction(
      actionHash?: null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      signature?: null,
      data?: null,
      executionTime?: null,
      withDelegatecall?: null,
      resultData?: null
    ): ExecutedActionEventFilter;

    "NewAdmin(address)"(newAdmin?: null): NewAdminEventFilter;
    NewAdmin(newAdmin?: null): NewAdminEventFilter;

    "NewDelay(uint256)"(delay?: null): NewDelayEventFilter;
    NewDelay(delay?: null): NewDelayEventFilter;

    "NewPendingAdmin(address)"(
      newPendingAdmin?: null
    ): NewPendingAdminEventFilter;
    NewPendingAdmin(newPendingAdmin?: null): NewPendingAdminEventFilter;

    "QueuedAction(bytes32,address,uint256,string,bytes,uint256,bool)"(
      actionHash?: null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      signature?: null,
      data?: null,
      executionTime?: null,
      withDelegatecall?: null
    ): QueuedActionEventFilter;
    QueuedAction(
      actionHash?: null,
      target?: PromiseOrValue<string> | null,
      value?: null,
      signature?: null,
      data?: null,
      executionTime?: null,
      withDelegatecall?: null
    ): QueuedActionEventFilter;
  };

  estimateGas: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<BigNumber>;

    cancelTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    getDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    isActionQueued(
      actionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queueTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GRACE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAXIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMUM_DELAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isActionQueued(
      actionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queueTransaction(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      executionTime: PromiseOrValue<BigNumberish>,
      withDelegatecall: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
