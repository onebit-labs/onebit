/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Errors,
  ErrorsInterface,
} from "../../../libraries/helpers/Errors";

const _abi = [
  {
    inputs: [],
    name: "BORROW_ALLOWANCE_NOT_ENOUGH",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLER_NOT_POOL_ADMIN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_CALLER_MUST_BE_CLAIM_ADMIN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_CALLER_MUST_BE_LENDING_POOL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_INVALID_BURN_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_INVALID_MINT_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_TOKEN_CAN_NOT_BE_SELF",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_TOKEN_CAN_NOT_BE_UNDERLYING",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CT_TRANSFER_AMOUNT_NOT_GT_0",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPAPR_INVALID_ADDRESSES_PROVIDER_ID",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPAPR_PROVIDER_NOT_REGISTERED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPCM_NO_ERRORS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPC_CALLER_NOT_EMERGENCY_ADMIN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPC_INVALID_ADDRESSES_PROVIDER_ID",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPC_INVALID_CONFIGURATION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPC_INVALID_OTOKEN_POOL_ADDRESS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LPC_RESERVE_LIQUIDITY_NOT_0",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_CALLER_MUST_BE_AN_OTOKEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_CALLER_NOT_POOL_OPERATOR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_IS_PAUSED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_NOT_CONTRACT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_NO_MORE_RESERVES_ALLOWED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LP_REENTRANCY_NOT_ALLOWED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_ADDITION_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_DIVISION_BY_ZERO",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MATH_MULTIPLICATION_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RC_INVALID_DECIMALS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RL_LIQUIDITY_INDEX_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RL_LIQUIDITY_RATE_OVERFLOW",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RL_RESERVE_ALREADY_INITIALIZED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SDT_BURN_EXCEEDS_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UL_INVALID_INDEX",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_INVALID_AMOUNT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_INVALID_FUND_ADDRESS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_INVALID_TIMESTAMP",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_NOT_FINISHED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_NOT_IN_LOCK_PERIOD",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_NOT_IN_PURCHASE_OR_REDEMPTION_PERIOD",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_NO_ACTIVE_RESERVE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_PURCHASE_UPPER_LIMIT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_RESERVE_FROZEN",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_TRANSFER_NOT_ALLOWED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61094b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061029f5760003560e01c8063637a5a1211610171578063d3e370ee116100d8578063ead3d1a211610091578063ead3d1a2146107fb578063f11c67201461081c578063f3d9cc111461083d578063f902735d1461085d578063fcafe4b61461087e578063fe75fd261461089f57600080fd5b8063d3e370ee14610737578063d57bb96414610758578063d6f681b614610779578063d7510e0c1461079a578063d991595a146107ba578063e2c16d69146107da57600080fd5b8063871938a81161012a578063871938a8146106745780638bea2b0014610694578063a2fbc8ad146106b5578063a8440241146106d6578063ac753236146106f6578063c7c0db701461071757600080fd5b8063637a5a12146105af57806365344799146105d05780636ba4271f146105f157806376f19030146106125780637865a627146106335780637ccd6bb91461065357600080fd5b8063333e8ea8116102155780634e7a3c5b116101ce5780634e7a3c5b146104ea5780634f9f7b8c1461050b5780634fe4f1ab1461052c5780635687181f1461054d578063590a2fc91461056d5780635a9786d41461058e57600080fd5b8063333e8ea81461042457806335a9d21d146104455780633f5d6ec8146104665780634349e3d814610487578063465d4e7f146104a857806347d25300146104c957600080fd5b80631291a38b116102675780631291a38b1461035f57806314e1219114610380578063179476c5146103a15780631befa78d146103c15780631ea7c604146103e25780632b9c57f61461040357600080fd5b806302454ad3146102a4578063029d2344146102db57806306f355ad146102fc5780630b8fd5881461031d5780630f5ee4821461033e575b600080fd5b6102c560405180604001604052806002815260200161373760f01b81525081565b6040516102d291906108c0565b60405180910390f35b6102c560405180604001604052806002815260200161068760f31b81525081565b6102c560405180604001604052806002815260200161033360f41b81525081565b6102c560405180604001604052806002815260200161191b60f11b81525081565b6102c560405180604001604052806002815260200161343960f01b81525081565b6102c5604051806040016040528060028152602001611a9b60f11b81525081565b6102c560405180604001604052806002815260200161313160f01b81525081565b6102c5604051806040016040528060018152602001600d60fa1b81525081565b6102c560405180604001604052806002815260200161038360f41b81525081565b6102c5604051806040016040528060028152602001611a1b60f11b81525081565b6102c56040518060400160405280600281526020016106a760f31b81525081565b6102c5604051806040016040528060028152602001611b9960f11b81525081565b6102c560405180604001604052806002815260200161313960f01b81525081565b6102c560405180604001604052806002815260200161037360f41b81525081565b6102c560405180604001604052806002815260200161035360f41b81525081565b6102c560405180604001604052806002815260200161333560f01b81525081565b6102c560405180604001604052806002815260200161373560f01b81525081565b6102c560405180604001604052806002815260200161383160f01b81525081565b6102c560405180604001604052806002815260200161383360f01b81525081565b6102c560405180604001604052806002815260200161353160f01b81525081565b6102c5604051806040016040528060018152602001600760fb1b81525081565b6102c5604051806040016040528060028152602001611c1960f11b81525081565b6102c560405180604001604052806002815260200161034360f41b81525081565b6102c56040518060400160405280600281526020016106e760f31b81525081565b6102c5604051806040016040528060028152602001610ccd60f21b81525081565b6102c560405180604001604052806002815260200161323960f01b81525081565b6102c560405180604001604052806002815260200161363560f01b81525081565b6102c5604051806040016040528060018152602001601960f91b81525081565b6102c560405180604001604052806002815260200161031360f41b81525081565b6102c5604051806040016040528060018152602001603160f81b81525081565b6102c560405180604001604052806002815260200161189960f11b81525081565b6102c560405180604001604052806002815260200161333160f01b81525081565b6102c5604051806040016040528060018152602001603560f81b81525081565b6102c560405180604001604052806002815260200161333360f01b81525081565b6102c5604051806040016040528060018152602001603960f81b81525081565b6102c5604051806040016040528060028152602001611b9b60f11b81525081565b6102c5604051806040016040528060028152602001610d8d60f21b81525081565b6102c560405180604001604052806002815260200161343160f01b81525081565b6102c5604051806040016040528060018152602001603360f81b81525081565b6102c5604051806040016040528060018152602001603760f81b81525081565b6102c560405180604001604052806002815260200161353960f01b81525081565b6102c560405180604001604052806002815260200161363360f01b81525081565b6102c560405180604001604052806002815260200161353360f01b81525081565b6102c5604051806040016040528060018152602001601b60f91b81525081565b6102c5604051806040016040528060028152602001611b1960f11b81525081565b6102c560405180604001604052806002815260200161323760f01b81525081565b6102c560405180604001604052806002815260200161199960f11b81525081565b600060208083528351808285015260005b818110156108ed578581018301518582016040015282016108d1565b818111156108ff576000604083870101525b50601f01601f191692909201604001939250505056fea264697066735822122012864bbbf7d86b20fba241b81a1952aaf7922f087d89cdb89a28bf132675802564736f6c63430008090033";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  override connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}
