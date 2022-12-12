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
    name: "CALLER_NOT_VAULT_ADMIN",
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
    name: "CT_CALLER_MUST_BE_VAULT",
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
    name: "LPC_CALLER_NOT_KYC_ADMIN",
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
    name: "LPC_INVALID_OTOKEN_VAULT_ADDRESS",
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
    name: "LP_CALLER_NOT_VAULT_CONFIGURATOR",
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
    name: "LP_CALLER_NOT_VAULT_OPERATOR",
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
    name: "LP_NOT_IN_WHITELIST",
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
  "0x6109ef61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102e05760003560e01c80635a9786d41161018c578063d3c4f9fe116100f3578063e2c16d69116100ac578063f3d9cc1111610086578063f3d9cc11146108e1578063f902735d14610901578063fdd3a27a14610922578063fe75fd261461094357600080fd5b8063e2c16d691461087e578063ead3d1a21461089f578063f11c6720146108c057600080fd5b8063d3c4f9fe146107ba578063d3e370ee146107db578063d57bb964146107fc578063d6f681b61461081d578063d7510e0c1461083e578063d991595a1461085e57600080fd5b80637ccd6bb9116101455780637ccd6bb9146106f7578063871938a8146107185780638bea2b0014610738578063a2fbc8ad14610759578063a84402411461077a578063c7c0db701461079a57600080fd5b80635a9786d414610632578063637a5a1214610653578063653447991461067457806375a278c41461069557806376f19030146106b65780637865a627146106d757600080fd5b80632b9c57f61161024b57806347d25300116102045780634f9f7b8c116101de5780634f9f7b8c146105af5780634fe4f1ab146105d05780635687181f146105f1578063590a2fc91461061157600080fd5b806347d253001461054c57806348c1054d1461056d5780634e7a3c5b1461058e57600080fd5b80632b9c57f6146104865780632fc96243146104a7578063333e8ea8146104c857806335a9d21d146104e95780633f5d6ec81461050a5780634349e3d81461052b57600080fd5b80631291a38b1161029d5780631291a38b146103c157806314e12191146103e2578063179476c51461040357806319a87aff146104235780631befa78d146104445780631ea7c6041461046557600080fd5b806302454ad3146102e5578063029d23441461031c578063034b3c861461033d57806306f355ad1461035e5780630b8fd5881461037f5780630f5ee482146103a0575b600080fd5b61030660405180604001604052806002815260200161373760f01b81525081565b6040516103139190610964565b60405180910390f35b61030660405180604001604052806002815260200161068760f31b81525081565b610306604051806040016040528060028152602001611b1b60f11b81525081565b61030660405180604001604052806002815260200161033360f41b81525081565b61030660405180604001604052806002815260200161191b60f11b81525081565b61030660405180604001604052806002815260200161343960f01b81525081565b610306604051806040016040528060028152602001611a9b60f11b81525081565b61030660405180604001604052806002815260200161313160f01b81525081565b610306604051806040016040528060018152602001600d60fa1b81525081565b610306604051806040016040528060028152602001610e0d60f21b81525081565b61030660405180604001604052806002815260200161038360f41b81525081565b610306604051806040016040528060028152602001611a1b60f11b81525081565b6103066040518060400160405280600281526020016106a760f31b81525081565b61030660405180604001604052806002815260200161333560f01b81525081565b610306604051806040016040528060028152602001611b9960f11b81525081565b61030660405180604001604052806002815260200161313960f01b81525081565b61030660405180604001604052806002815260200161037360f41b81525081565b61030660405180604001604052806002815260200161035360f41b81525081565b61030660405180604001604052806002815260200161373560f01b81525081565b61030660405180604001604052806002815260200161333360f01b81525081565b61030660405180604001604052806002815260200161383160f01b81525081565b61030660405180604001604052806002815260200161383360f01b81525081565b61030660405180604001604052806002815260200161353160f01b81525081565b610306604051806040016040528060018152602001600760fb1b81525081565b610306604051806040016040528060028152602001611c1960f11b81525081565b61030660405180604001604052806002815260200161034360f41b81525081565b6103066040518060400160405280600281526020016106e760f31b81525081565b610306604051806040016040528060028152602001610ccd60f21b81525081565b61030660405180604001604052806002815260200161323760f01b81525081565b61030660405180604001604052806002815260200161363560f01b81525081565b610306604051806040016040528060018152602001601960f91b81525081565b61030660405180604001604052806002815260200161031360f41b81525081565b610306604051806040016040528060018152602001603160f81b81525081565b61030660405180604001604052806002815260200161189960f11b81525081565b61030660405180604001604052806002815260200161333160f01b81525081565b610306604051806040016040528060018152602001603560f81b81525081565b610306604051806040016040528060018152602001603960f81b81525081565b61030660405180604001604052806002815260200161064760f31b81525081565b610306604051806040016040528060028152602001611b9b60f11b81525081565b610306604051806040016040528060028152602001610d8d60f21b81525081565b61030660405180604001604052806002815260200161343160f01b81525081565b610306604051806040016040528060018152602001603360f81b81525081565b610306604051806040016040528060018152602001603760f81b81525081565b61030660405180604001604052806002815260200161353960f01b81525081565b61030660405180604001604052806002815260200161363360f01b81525081565b61030660405180604001604052806002815260200161353360f01b81525081565b610306604051806040016040528060018152602001601b60f91b81525081565b610306604051806040016040528060028152602001611b1960f11b81525081565b61030660405180604001604052806002815260200161323960f01b81525081565b61030660405180604001604052806002815260200161199960f11b81525081565b600060208083528351808285015260005b8181101561099157858101830151858201604001528201610975565b818111156109a3576000604083870101525b50601f01601f191692909201604001939250505056fea26469706673582212205e19f6b0f4e329ac8b0acfc3cf957623635607e3259e174f57e43648303995a964736f6c63430008090033";

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
