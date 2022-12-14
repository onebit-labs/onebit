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
} from "../common";

export interface IVaultAddressesProviderRegistryInterface
  extends utils.Interface {
  functions: {
    "getAddressesProviderIdByAddress(address)": FunctionFragment;
    "getAddressesProvidersList()": FunctionFragment;
    "registerAddressesProvider(address,uint256)": FunctionFragment;
    "unregisterAddressesProvider(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAddressesProviderIdByAddress"
      | "getAddressesProvidersList"
      | "registerAddressesProvider"
      | "unregisterAddressesProvider"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAddressesProviderIdByAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddressesProvidersList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerAddressesProvider",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterAddressesProvider",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAddressesProviderIdByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAddressesProvidersList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAddressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterAddressesProvider",
    data: BytesLike
  ): Result;

  events: {
    "AddressesProviderRegistered(address)": EventFragment;
    "AddressesProviderUnregistered(address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AddressesProviderRegistered"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AddressesProviderUnregistered"
  ): EventFragment;
}

export interface AddressesProviderRegisteredEventObject {
  newAddress: string;
}
export type AddressesProviderRegisteredEvent = TypedEvent<
  [string],
  AddressesProviderRegisteredEventObject
>;

export type AddressesProviderRegisteredEventFilter =
  TypedEventFilter<AddressesProviderRegisteredEvent>;

export interface AddressesProviderUnregisteredEventObject {
  newAddress: string;
}
export type AddressesProviderUnregisteredEvent = TypedEvent<
  [string],
  AddressesProviderUnregisteredEventObject
>;

export type AddressesProviderUnregisteredEventFilter =
  TypedEventFilter<AddressesProviderUnregisteredEvent>;

export interface IVaultAddressesProviderRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultAddressesProviderRegistryInterface;

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
    getAddressesProviderIdByAddress(
      addressesProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAddressesProvidersList(overrides?: CallOverrides): Promise<[string[]]>;

    registerAddressesProvider(
      provider: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unregisterAddressesProvider(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getAddressesProviderIdByAddress(
    addressesProvider: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;

  registerAddressesProvider(
    provider: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unregisterAddressesProvider(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAddressesProviderIdByAddress(
      addressesProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddressesProvidersList(overrides?: CallOverrides): Promise<string[]>;

    registerAddressesProvider(
      provider: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unregisterAddressesProvider(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddressesProviderRegistered(address)"(
      newAddress?: PromiseOrValue<string> | null
    ): AddressesProviderRegisteredEventFilter;
    AddressesProviderRegistered(
      newAddress?: PromiseOrValue<string> | null
    ): AddressesProviderRegisteredEventFilter;

    "AddressesProviderUnregistered(address)"(
      newAddress?: PromiseOrValue<string> | null
    ): AddressesProviderUnregisteredEventFilter;
    AddressesProviderUnregistered(
      newAddress?: PromiseOrValue<string> | null
    ): AddressesProviderUnregisteredEventFilter;
  };

  estimateGas: {
    getAddressesProviderIdByAddress(
      addressesProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddressesProvidersList(overrides?: CallOverrides): Promise<BigNumber>;

    registerAddressesProvider(
      provider: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unregisterAddressesProvider(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddressesProviderIdByAddress(
      addressesProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddressesProvidersList(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAddressesProvider(
      provider: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unregisterAddressesProvider(
      provider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
