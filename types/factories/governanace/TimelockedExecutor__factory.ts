/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TimelockedExecutor,
  TimelockedExecutorInterface,
} from "../../governanace/TimelockedExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gracePeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumDelay",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "CancelledAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "resultData",
        type: "bytes",
      },
    ],
    name: "ExecutedAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "QueuedAction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "cancelTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actionHash",
        type: "bytes32",
      },
    ],
    name: "isActionQueued",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "executionTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withDelegatecall",
        type: "bool",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405161116938038061116983398101604081905261002f9161017c565b818410156100845760405162461bcd60e51b815260206004820152601a60248201527f44454c41595f53484f525445525f5448414e5f4d494e494d554d00000000000060448201526064015b60405180910390fd5b808411156100d45760405162461bcd60e51b815260206004820152601960248201527f44454c41595f4c4f4e4745525f5448414e5f4d4158494d554d00000000000000604482015260640161007b565b6002849055600080546001600160a01b0319166001600160a01b038716179055608083905260a082905260c08190526040518481527f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c9060200160405180910390a16040516001600160a01b03861681527f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c9060200160405180910390a150505050506101d1565b600080600080600060a0868803121561019457600080fd5b85516001600160a01b03811681146101ab57600080fd5b602087015160408801516060890151608090990151929a91995097965090945092505050565b60805160a05160c051610f546102156000396000818161019b0152610ac201526000818161020f0152610a5201526000818161028301526106050152610f546000f3fe6080604052600436106100e15760003560e01c8063b1b43ae51161007f578063cebc9a8211610059578063cebc9a82146102a5578063d0468156146102ba578063e177246e146102d8578063f3fef3a3146102f857600080fd5b8063b1b43ae5146101fd578063b1fc879614610231578063c1a287e21461027157600080fd5b80636e9960c3116100bb5780636e9960c3146101575780637d645fab146101895780638902ab65146101bd5780638d8fe2e3146101dd57600080fd5b80630e18b681146100ed5780631dc40b51146101045780634dd18bf51461013757600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b50610102610318565b005b34801561011057600080fd5b5061012461011f366004610beb565b6103c3565b6040519081526020015b60405180910390f35b34801561014357600080fd5b50610102610152366004610cad565b61048f565b34801561016357600080fd5b506000546001600160a01b03165b6040516001600160a01b03909116815260200161012e565b34801561019557600080fd5b506101247f000000000000000000000000000000000000000000000000000000000000000081565b6101d06101cb366004610beb565b610503565b60405161012e9190610d2b565b3480156101e957600080fd5b506101246101f8366004610beb565b610881565b34801561020957600080fd5b506101247f000000000000000000000000000000000000000000000000000000000000000081565b34801561023d57600080fd5b5061026161024c366004610d3e565b60009081526003602052604090205460ff1690565b604051901515815260200161012e565b34801561027d57600080fd5b506101247f000000000000000000000000000000000000000000000000000000000000000081565b3480156102b157600080fd5b50600254610124565b3480156102c657600080fd5b506001546001600160a01b0316610171565b3480156102e457600080fd5b506101026102f3366004610d3e565b610999565b34801561030457600080fd5b50610102610313366004610d57565b6109f6565b6001546001600160a01b0316331461036f5760405162461bcd60e51b815260206004820152601560248201527427a7262cafa12cafa822a72224a723afa0a226a4a760591b60448201526064015b60405180910390fd5b60008054336001600160a01b031991821681179092556001805490911690556040519081527f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c9060200160405180910390a1565b600080546001600160a01b031633146103ee5760405162461bcd60e51b815260040161036690610d81565b600087878787878760405160200161040b96959493929190610da8565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916905591506001600160a01b038916907f87c481aa909c37502caa37394ab791c26b68fa4fa5ae56de104de36444ae90699061047c9084908b908b908b908b908b90610dfc565b60405180910390a2979650505050505050565b3330146104ae5760405162461bcd60e51b815260040161036690610e1b565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a756906020015b60405180910390a150565b6000546060906001600160a01b031633146105305760405162461bcd60e51b815260040161036690610d81565b600087878787878760405160200161054d96959493929190610da8565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166105b85760405162461bcd60e51b81526020600482015260116024820152701050d51253d397d393d517d45551555151607a1b6044820152606401610366565b834210156106005760405162461bcd60e51b8152602060048201526015602482015274151253515313d0d2d7d393d517d192539254d21151605a1b6044820152606401610366565b61062a7f000000000000000000000000000000000000000000000000000000000000000085610e4a565b4211156106715760405162461bcd60e51b815260206004820152601560248201527411d49050d157d411549253d117d192539254d21151605a1b6044820152606401610366565b6000818152600360205260409020805460ff1916905585516060906106975750846106c3565b8680519060200120866040516020016106b1929190610e70565b60405160208183030381529060405290505b60006060851561077757893410156107145760405162461bcd60e51b81526020600482015260146024820152734e4f545f454e4f5547485f4d53475f56414c554560601b6044820152606401610366565b8a6001600160a01b03168360405161072c9190610ea1565b600060405180830381855af49150503d8060008114610767576040519150601f19603f3d011682016040523d82523d6000602084013e61076c565b606091505b5090925090506107d9565b8a6001600160a01b03168a846040516107909190610ea1565b60006040518083038185875af1925050503d80600081146107cd576040519150601f19603f3d011682016040523d82523d6000602084013e6107d2565b606091505b5090925090505b816108265760405162461bcd60e51b815260206004820152601760248201527f4641494c45445f414354494f4e5f455845435554494f4e0000000000000000006044820152606401610366565b8a6001600160a01b03167f97825080b472fa91fe888b62ec128814d60dec546a2dafb955e50923f4a1b7e7858c8c8c8c8c8860405161086b9796959493929190610ebd565b60405180910390a29a9950505050505050505050565b600080546001600160a01b031633146108ac5760405162461bcd60e51b815260040161036690610d81565b6002546108b99042610e4a565b8310156109085760405162461bcd60e51b815260206004820152601d60248201527f455845435554494f4e5f54494d455f554e444552455354494d415445440000006044820152606401610366565b600087878787878760405160200161092596959493929190610da8565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916600117905591506001600160a01b038916907f2191aed4c4733c76e08a9e7e1da0b8d87fa98753f22df49231ddc66e0f05f0229061047c9084908b908b908b908b908b90610dfc565b3330146109b85760405162461bcd60e51b815260040161036690610e1b565b6109c181610a50565b60028190556040518181527f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c906020016104f8565b333014610a155760405162461bcd60e51b815260040161036690610e1b565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610a4b573d6000803e3d6000fd5b505050565b7f0000000000000000000000000000000000000000000000000000000000000000811015610ac05760405162461bcd60e51b815260206004820152601a60248201527f44454c41595f53484f525445525f5448414e5f4d494e494d554d0000000000006044820152606401610366565b7f0000000000000000000000000000000000000000000000000000000000000000811115610b305760405162461bcd60e51b815260206004820152601960248201527f44454c41595f4c4f4e4745525f5448414e5f4d4158494d554d000000000000006044820152606401610366565b50565b80356001600160a01b0381168114610b4a57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610b8057610b80610b4f565b604051601f8501601f19908116603f01168101908282118183101715610ba857610ba8610b4f565b81604052809350858152868686011115610bc157600080fd5b858560208301376000602087830101525050509392505050565b80358015158114610b4a57600080fd5b60008060008060008060c08789031215610c0457600080fd5b610c0d87610b33565b955060208701359450604087013567ffffffffffffffff80821115610c3157600080fd5b818901915089601f830112610c4557600080fd5b610c548a833560208501610b65565b95506060890135915080821115610c6a57600080fd5b508701601f81018913610c7c57600080fd5b610c8b89823560208401610b65565b93505060808701359150610ca160a08801610bdb565b90509295509295509295565b600060208284031215610cbf57600080fd5b610cc882610b33565b9392505050565b60005b83811015610cea578181015183820152602001610cd2565b83811115610cf9576000848401525b50505050565b60008151808452610d17816020860160208601610ccf565b601f01601f19169290920160200192915050565b602081526000610cc86020830184610cff565b600060208284031215610d5057600080fd5b5035919050565b60008060408385031215610d6a57600080fd5b610d7383610b33565b946020939093013593505050565b6020808252600d908201526c27a7262cafa12cafa0a226a4a760991b604082015260600190565b60018060a01b038716815285602082015260c060408201526000610dcf60c0830187610cff565b8281036060840152610de18187610cff565b6080840195909552505090151560a090910152949350505050565b86815285602082015260c060408201526000610dcf60c0830187610cff565b6020808252601590820152744f4e4c595f42595f544849535f54494d454c4f434b60581b604082015260600190565b60008219821115610e6b57634e487b7160e01b600052601160045260246000fd5b500190565b6001600160e01b0319831681528151600090610e93816004850160208701610ccf565b919091016004019392505050565b60008251610eb3818460208701610ccf565b9190910192915050565b87815286602082015260e060408201526000610edc60e0830188610cff565b8281036060840152610eee8188610cff565b905085608084015284151560a084015282810360c0840152610f108185610cff565b9a995050505050505050505056fea2646970667358221220dbc07c28362a64c5a515567a4024a6e55ef6711687f3345910c62cd0ab7a860964736f6c63430008090033";

type TimelockedExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockedExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockedExecutor__factory extends ContractFactory {
  constructor(...args: TimelockedExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin: PromiseOrValue<string>,
    delay: PromiseOrValue<BigNumberish>,
    gracePeriod: PromiseOrValue<BigNumberish>,
    minimumDelay: PromiseOrValue<BigNumberish>,
    maximumDelay: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockedExecutor> {
    return super.deploy(
      admin,
      delay,
      gracePeriod,
      minimumDelay,
      maximumDelay,
      overrides || {}
    ) as Promise<TimelockedExecutor>;
  }
  override getDeployTransaction(
    admin: PromiseOrValue<string>,
    delay: PromiseOrValue<BigNumberish>,
    gracePeriod: PromiseOrValue<BigNumberish>,
    minimumDelay: PromiseOrValue<BigNumberish>,
    maximumDelay: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      admin,
      delay,
      gracePeriod,
      minimumDelay,
      maximumDelay,
      overrides || {}
    );
  }
  override attach(address: string): TimelockedExecutor {
    return super.attach(address) as TimelockedExecutor;
  }
  override connect(signer: Signer): TimelockedExecutor__factory {
    return super.connect(signer) as TimelockedExecutor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockedExecutorInterface {
    return new utils.Interface(_abi) as TimelockedExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockedExecutor {
    return new Contract(address, _abi, signerOrProvider) as TimelockedExecutor;
  }
}
