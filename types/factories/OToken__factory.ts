/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OToken, OTokenInterface } from "../OToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "oTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "oTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "oTokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EIP712_REVISION",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OTOKEN_REVISION",
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
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverOfUnderlying",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "oTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "oTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "oTokenSymbol",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
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
    name: "scaledTotalSupply",
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
    name: "symbol",
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
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferUnderlyingTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080553480156200001557600080fd5b50604080518082018252600b8082526a13d513d2d15397d253541360aa1b602080840182815285518087019096529285528401528151919291600091620000609160379190620000a3565b50815162000076906038906020850190620000a3565b506039805460ff191660ff929092169190911790555050603c80546001600160a01b031916905562000186565b828054620000b19062000149565b90600052602060002090601f016020900481019282620000d5576000855562000120565b82601f10620000f057805160ff191683800117855562000120565b8280016001018555821562000120579182015b828111156200012057825182559160200191906001019062000103565b506200012e92915062000132565b5090565b5b808211156200012e576000815560010162000133565b600181811c908216806200015e57607f821691505b602082108114156200018057634e487b7160e01b600052602260045260246000fd5b50919050565b611daa80620001966000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80637535d246116100de578063b16a19de11610097578063bc15f45711610071578063bc15f457146103a4578063d505accf146103ac578063d7020d0a146103bf578063dd62ed3e146103d257600080fd5b8063b16a19de1461036b578063b1bf962d1461037c578063b9844d8d1461038457600080fd5b80637535d246146102e357806378160376146103085780637fdd585f1461032857806395d89b411461033d578063a457c2d714610345578063a9059cbb1461035857600080fd5b806323b872dd1161014b5780633644e515116101255780633644e515146102a157806339509351146102aa5780634efecaa5146102bd57806370a08231146102d057600080fd5b806323b872dd1461025257806330adf81f14610265578063313ce5671461028c57600080fd5b806306fdde0314610193578063095ea7b3146101b15780630afbcdc9146101d4578063156e29f61461021657806318160ddd146102295780631da24f3e1461023f575b600080fd5b61019b61040b565b6040516101a89190611857565b60405180910390f35b6101c46101bf366004611882565b61049d565b60405190151581526020016101a8565b6102016101e23660046118ae565b6001600160a01b03166000908152603460205260409020546036549091565b604080519283526020830191909152016101a8565b6101c46102243660046118cb565b6104b4565b6102316105eb565b6040519081526020016101a8565b61023161024d3660046118ae565b610691565b6101c4610260366004611900565b6106af565b6102317f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60395460405160ff90911681526020016101a8565b610231603b5481565b6101c46102b8366004611882565b610753565b6102316102cb366004611882565b61078a565b6102316102de3660046118ae565b6107ef565b603c546001600160a01b03165b6040516001600160a01b0390911681526020016101a8565b61019b604051806040016040528060018152602001603160f81b81525081565b61033b6103363660046119a0565b610899565b005b61019b610b03565b6101c4610353366004611882565b610b12565b6101c4610366366004611882565b610b61565b603d546001600160a01b03166102f0565b610231610ba5565b6102316103923660046118ae565b603a6020526000908152604090205481565b610231600181565b61033b6103ba366004611a72565b610bb5565b61033b6103cd366004611ae0565b610de7565b6102316103e0366004611b26565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b60606037805461041a90611b5f565b80601f016020809104026020016040519081016040528092919081815260200182805461044690611b5f565b80156104935780601f1061046857610100808354040283529160200191610493565b820191906000526020600020905b81548152906001019060200180831161047657829003601f168201915b5050505050905090565b60006104aa338484610f2c565b5060015b92915050565b603c54604080518082019091526002815261323960f01b60208201526000916001600160a01b031633146105045760405162461bcd60e51b81526004016104fb9190611857565b60405180910390fd5b506001600160a01b038416600090815260346020526040812054906105298585611050565b6040805180820190915260028152611a9b60f11b6020820152909150816105635760405162461bcd60e51b81526004016104fb9190611857565b5061056e868261112e565b6040518581526001600160a01b03871690600090600080516020611d308339815191529060200160405180910390a360408051868152602081018690526001600160a01b038816917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a25015949350505050565b6000806105f760365490565b90508061060657600091505090565b603c54604080516325b0985360e21b8152905161068b926001600160a01b0316916396c2614c916004808301926020929190829003018186803b15801561064c57600080fd5b505afa158015610660573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106849190611b94565b82906111d9565b91505090565b6001600160a01b0381166000908152603460205260408120546104ae565b60006106bc84848461129b565b61070e843361070985604051806060016040528060288152602001611d08602891396001600160a01b038a1660009081526035602090815260408083203384529091529020549190611398565b610f2c565b826001600160a01b0316846001600160a01b0316600080516020611d308339815191528460405161074191815260200190565b60405180910390a35060019392505050565b3360008181526035602090815260408083206001600160a01b038716845290915281205490916104aa918590610709908690611bc3565b603c54604080518082019091526002815261323960f01b60208201526000916001600160a01b031633146107d15760405162461bcd60e51b81526004016104fb9190611857565b50603d546107e9906001600160a01b031684846113c4565b50919050565b60006104ae603c60009054906101000a90046001600160a01b03166001600160a01b03166396c2614c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561084257600080fd5b505afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a9190611b94565b6001600160a01b03841660009081526034602052604090205490611455565b6001805460ff16806108aa5750303b155b806108b6575060005481115b6109195760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b60648201526084016104fb565b60015460ff16158015610938576001805460ff19168117905560008290555b60405146907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f9061096c908b908b90611bdb565b60408051918290038220828201825260018352603160f81b6020938401528151928301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66060820152608081018290523060a082015260c00160408051601f198184030181528282528051602091820120603b55601f8b01819004810283018101909152898252610a2291908b908b908190840183828082843760009201919091525061148692505050565b610a6187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061149d92505050565b6039805460ff191660ff8c16179055603c80546001600160a01b03808f166001600160a01b03199283168117909355603d8054918f169190921681179091556040517f5d8ce3e947367e84e7fa4f4ba36ebe75e6b6c6b93c25673faa4df0202b59c13890610adc908e908e908e908e908e908e908e90611c14565b60405180910390a3508015610af6576001805460ff191690555b5050505050505050505050565b60606038805461041a90611b5f565b60006104aa338461070985604051806060016040528060258152602001611d50602591393360009081526035602090815260408083206001600160a01b038d1684529091529020549190611398565b6000610b6e33848461129b565b6040518281526001600160a01b038416903390600080516020611d308339815191529060200160405180910390a350600192915050565b6000610bb060365490565b905090565b6001600160a01b038716610bfb5760405162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b60448201526064016104fb565b83421115610c405760405162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa2ac2824a920aa24a7a760711b60448201526064016104fb565b6001600160a01b038781166000818152603a6020908152604080832054603b5482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958c166060860152608085018b905260a0850181905260c08086018b90528251808703909101815260e086019092528151919092012061190160f01b610100850152610102840194909452610122830193909352906101420160408051601f1981840301815282825280516020918201206000845290830180835281905260ff8816918301919091526060820186905260808201859052915060019060a0016020604051602081039080840390855afa158015610d4f573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610dad5760405162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b60448201526064016104fb565b610db8826001611bc3565b6001600160a01b038a166000908152603a6020526040902055610ddc898989610f2c565b505050505050505050565b603c546001600160a01b0316336001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610e375760405162461bcd60e51b81526004016104fb9190611857565b506000610e448383611050565b60408051808201909152600281526106a760f31b602082015290915081610e7e5760405162461bcd60e51b81526004016104fb9190611857565b50610e8985826114b0565b603d54610ea0906001600160a01b031685856113c4565b6040518381526000906001600160a01b03871690600080516020611d308339815191529060200160405180910390a3836001600160a01b0316856001600160a01b03167f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa28585604051610f1d929190918252602082015260400190565b60405180910390a35050505050565b6001600160a01b038316610f8e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104fb565b6001600160a01b038216610fef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104fb565b6001600160a01b0383811660008181526035602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b604080518082019091526002815261035360f41b60208201526000908261108a5760405162461bcd60e51b81526004016104fb9190611857565b506000611098600284611c67565b90506b033b2e3c9fd0803ce80000006110b382600019611c89565b6110bd9190611c67565b84111560405180604001604052806002815260200161068760f31b815250906110f95760405162461bcd60e51b81526004016104fb9190611857565b5082816111126b033b2e3c9fd0803ce800000087611ca0565b61111c9190611bc3565b6111269190611c67565b949350505050565b6001600160a01b0382166111845760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104fb565b6036546111918282611bc3565b6036556001600160a01b0383166000908152603460205260409020546111b78382611bc3565b6001600160a01b03909416600090815260346020526040902093909355505050565b60008215806111e6575081155b156111f3575060006104ae565b8161120b60026b033b2e3c9fd0803ce8000000611c67565b61121790600019611c89565b6112219190611c67565b83111560405180604001604052806002815260200161068760f31b8152509061125d5760405162461bcd60e51b81526004016104fb9190611857565b506b033b2e3c9fd0803ce8000000611276600282611c67565b6112808486611ca0565b61128a9190611bc3565b6112949190611c67565b9392505050565b603d54603c54604080516325b0985360e21b815290516001600160a01b03938416939092169160009183916396c2614c91600480820192602092909190829003018186803b1580156112ec57600080fd5b505afa158015611300573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113249190611b94565b905061133a86866113358785611050565b611563565b846001600160a01b0316866001600160a01b03167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda86668684604051611388929190918252602082015260400190565b60405180910390a3505050505050565b600081848411156113bc5760405162461bcd60e51b81526004016104fb9190611857565b505050900390565b60405163a9059cbb60e01b8082526001600160a01b0384166004830152602482018390529060008060448382895af1611401573d6000803e3d6000fd5b5061140b846116ca565b61144f5760405162461bcd60e51b815260206004820152601560248201527423a83b191d103330b4b632b2103a3930b739b332b960591b60448201526064016104fb565b50505050565b6000821580611462575081155b1561146f575060006104ae565b6b033b2e3c9fd0803ce800000061128a8385611ca0565b8051611499906037906020840190611771565b5050565b8051611499906038906020840190611771565b6001600160a01b0382166115105760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104fb565b60365461151d8282611c89565b6036556001600160a01b03831660009081526034602090815260409182902054825160608101909352602280845290926111b792869290611cc090830139839190611398565b6001600160a01b0383166115c75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104fb565b6001600160a01b0382166116295760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104fb565b600060346000856001600160a01b03166001600160a01b0316815260200190815260200160002054905061167882604051806060016040528060268152602001611ce260269139839190611398565b6001600160a01b0380861660009081526034602052604080822093909355908516815220546116a78382611bc3565b6001600160a01b0390941660009081526034602052604090209390935550505050565b60006116f0565b62461bcd60e51b60005260206004528060245250806044525060646000fd5b3d801561172f57602081146117605761172a7f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f6116d1565b6107e9565b823b611757576117577311d41d8c8e881b9bdd08184818dbdb9d1c9858dd60621b60146116d1565b600191506107e9565b3d6000803e50506000511515919050565b82805461177d90611b5f565b90600052602060002090601f01602090048101928261179f57600085556117e5565b82601f106117b857805160ff19168380011785556117e5565b828001600101855582156117e5579182015b828111156117e55782518255916020019190600101906117ca565b506117f19291506117f5565b5090565b5b808211156117f157600081556001016117f6565b6000815180845260005b8181101561183057602081850181015186830182015201611814565b81811115611842576000602083870101525b50601f01601f19169290920160200192915050565b602081526000611294602083018461180a565b6001600160a01b038116811461187f57600080fd5b50565b6000806040838503121561189557600080fd5b82356118a08161186a565b946020939093013593505050565b6000602082840312156118c057600080fd5b81356112948161186a565b6000806000606084860312156118e057600080fd5b83356118eb8161186a565b95602085013595506040909401359392505050565b60008060006060848603121561191557600080fd5b83356119208161186a565b925060208401356119308161186a565b929592945050506040919091013590565b803560ff8116811461195257600080fd5b919050565b60008083601f84011261196957600080fd5b50813567ffffffffffffffff81111561198157600080fd5b60208301915083602082850101111561199957600080fd5b9250929050565b600080600080600080600080600060c08a8c0312156119be57600080fd5b89356119c98161186a565b985060208a01356119d98161186a565b97506119e760408b01611941565b965060608a013567ffffffffffffffff80821115611a0457600080fd5b611a108d838e01611957565b909850965060808c0135915080821115611a2957600080fd5b611a358d838e01611957565b909650945060a08c0135915080821115611a4e57600080fd5b50611a5b8c828d01611957565b915080935050809150509295985092959850929598565b600080600080600080600060e0888a031215611a8d57600080fd5b8735611a988161186a565b96506020880135611aa88161186a565b95506040880135945060608801359350611ac460808901611941565b925060a0880135915060c0880135905092959891949750929550565b60008060008060808587031215611af657600080fd5b8435611b018161186a565b93506020850135611b118161186a565b93969395505050506040820135916060013590565b60008060408385031215611b3957600080fd5b8235611b448161186a565b91506020830135611b548161186a565b809150509250929050565b600181811c90821680611b7357607f821691505b602082108114156107e957634e487b7160e01b600052602260045260246000fd5b600060208284031215611ba657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611bd657611bd6611bad565b500190565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60ff88168152608060208201526000611c3160808301888a611beb565b8281036040840152611c44818789611beb565b90508281036060840152611c59818587611beb565b9a9950505050505050505050565b600082611c8457634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611c9b57611c9b611bad565b500390565b6000816000190483118215151615611cba57611cba611bad565b50029056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212203d32c4757aed4a678b63518da67d15a4503ac2801234ab2f3bb5ae483e19c14264736f6c63430008090033";

type OTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OToken__factory extends ContractFactory {
  constructor(...args: OTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OToken> {
    return super.deploy(overrides || {}) as Promise<OToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OToken {
    return super.attach(address) as OToken;
  }
  override connect(signer: Signer): OToken__factory {
    return super.connect(signer) as OToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OTokenInterface {
    return new utils.Interface(_abi) as OTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OToken {
    return new Contract(address, _abi, signerOrProvider) as OToken;
  }
}
