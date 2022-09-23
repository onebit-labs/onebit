/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LendingPoolAddressesProvider,
  LendingPoolAddressesProviderInterface,
} from "../LendingPoolAddressesProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "marketId",
        type: "string",
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
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "hasProxy",
        type: "bool",
      },
    ],
    name: "AddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ConfigurationAdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "EmergencyAdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "LendingPoolUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newMarketId",
        type: "string",
      },
    ],
    name: "MarketIdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "OTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PoolOperatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ProxyCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getAddress",
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
    name: "getEmergencyAdmin",
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
    name: "getLendingPool",
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
    name: "getMarketId",
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
    name: "getOToken",
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
    name: "getPoolAdmin",
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
    name: "getPoolOperator",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "setAddressAsProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "emergencyAdmin",
        type: "address",
      },
    ],
    name: "setEmergencyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "setLendingPoolImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "marketId",
        type: "string",
      },
    ],
    name: "setMarketId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "otoken",
        type: "address",
      },
    ],
    name: "setOTokenImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "setPoolAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "setPoolOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002d8e38038062002d8e8339818101604052810190620000379190620003dd565b620000576200004b6200006f60201b60201c565b6200007760201b60201c565b62000068816200013b60201b60201c565b5062000514565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600190805190602001906200015392919062000190565b507f5e667c32fd847cf8bce48ab3400175cbf107bdc82b2dea62e3364909dfaee799816040516200018591906200048b565b60405180910390a150565b8280546200019e90620004de565b90600052602060002090601f016020900481019282620001c257600085556200020e565b82601f10620001dd57805160ff19168380011785556200020e565b828001600101855582156200020e579182015b828111156200020d578251825591602001919060010190620001f0565b5b5090506200021d919062000221565b5090565b5b808211156200023c57600081600090555060010162000222565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002a9826200025e565b810181811067ffffffffffffffff82111715620002cb57620002ca6200026f565b5b80604052505050565b6000620002e062000240565b9050620002ee82826200029e565b919050565b600067ffffffffffffffff8211156200031157620003106200026f565b5b6200031c826200025e565b9050602081019050919050565b60005b83811015620003495780820151818401526020810190506200032c565b8381111562000359576000848401525b50505050565b6000620003766200037084620002f3565b620002d4565b90508281526020810184848401111562000395576200039462000259565b5b620003a284828562000329565b509392505050565b600082601f830112620003c257620003c162000254565b5b8151620003d48482602086016200035f565b91505092915050565b600060208284031215620003f657620003f56200024a565b5b600082015167ffffffffffffffff8111156200041757620004166200024f565b5b6200042584828501620003aa565b91505092915050565b600081519050919050565b600082825260208201905092915050565b600062000457826200042e565b62000463818562000439565b93506200047581856020860162000329565b62000480816200025e565b840191505092915050565b60006020820190508181036000830152620004a781846200044a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004f757607f821691505b602082108114156200050e576200050d620004af565b5b50919050565b61286a80620005246000396000f3fe60806040523480156200001157600080fd5b5060043610620001305760003560e01c8063715018a611620000b1578063aecda378116200007b578063aecda37814620002e1578063ca446dd91462000303578063ddcaa9ea1462000323578063f2fde38b1462000345578063f67b184714620003655762000130565b8063715018a61462000271578063801217e1146200027d5780638da5cb5b146200029f5780639182fed614620002c15762000130565b806335da339411620000ff57806335da339414620001cd578063568ef47014620001ed5780635aef021f146200020f5780635dcc528c146200022f5780636d44f55d146200024f5762000130565b80630261bf8b146200013557806321f8a7211462000157578063283d62ad146200018d57806335ad1e0314620001ad575b600080fd5b6200013f62000385565b6040516200014e91906200144a565b60405180910390f35b6200017560048036038101906200016f9190620014b6565b620003b7565b6040516200018491906200144a565b60405180910390f35b620001ab6004803603810190620001a5919062001519565b620003f4565b005b620001cb6004803603810190620001c5919062001519565b6200052f565b005b620001eb6004803603810190620001e5919062001519565b6200066a565b005b620001f7620007a5565b604051620002069190620015ef565b60405180910390f35b6200022d600480360381019062000227919062001519565b6200083f565b005b6200024d600480360381019062000247919062001613565b62000934565b005b6200025962000a1a565b6040516200026891906200144a565b60405180910390f35b6200027b62000a4c565b005b6200028762000add565b6040516200029691906200144a565b60405180910390f35b620002a962000b0f565b604051620002b891906200144a565b60405180910390f35b620002df6004803603810190620002d9919062001519565b62000b38565b005b620002eb62000c2d565b604051620002fa91906200144a565b60405180910390f35b6200032160048036038101906200031b919062001613565b62000c5f565b005b6200032d62000d8b565b6040516200033c91906200144a565b60405180910390f35b6200036360048036038101906200035d919062001519565b62000dbd565b005b6200038360048036038101906200037d9190620017ab565b62000ec1565b005b6000620003b27f4c454e44494e475f504f4f4c0000000000000000000000000000000000000000620003b7565b905090565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b620003fe62000f52565b73ffffffffffffffffffffffffffffffffffffffff166200041e62000b0f565b73ffffffffffffffffffffffffffffffffffffffff161462000477576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200046e906200184c565b60405180910390fd5b80600260007f504f4f4c5f41444d494e00000000000000000000000000000000000000000000815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fc20a317155a9e7d84e06b716b4b355d47742ab9f8c5d630e7f556553f582430d60405160405180910390a250565b6200053962000f52565b73ffffffffffffffffffffffffffffffffffffffff166200055962000b0f565b73ffffffffffffffffffffffffffffffffffffffff1614620005b2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005a9906200184c565b60405180910390fd5b80600260007f504f4f4c5f4f50455241544f5200000000000000000000000000000000000000815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fa765d64378c184db6ffc9d51203fd4365f218ccf4b1cd93092ca7dc15efe5def60405160405180910390a250565b6200067462000f52565b73ffffffffffffffffffffffffffffffffffffffff166200069462000b0f565b73ffffffffffffffffffffffffffffffffffffffff1614620006ed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006e4906200184c565b60405180910390fd5b80600260007f454d455247454e43595f41444d494e0000000000000000000000000000000000815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fe19673fc861bfeb894cf2d6b7662505497ef31c0f489b742db24ee331082691660405160405180910390a250565b606060018054620007b6906200189d565b80601f0160208091040260200160405190810160405280929190818152602001828054620007e4906200189d565b8015620008355780601f10620008095761010080835404028352916020019162000835565b820191906000526020600020905b8154815290600101906020018083116200081757829003601f168201915b5050505050905090565b6200084962000f52565b73ffffffffffffffffffffffffffffffffffffffff166200086962000b0f565b73ffffffffffffffffffffffffffffffffffffffff1614620008c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008b9906200184c565b60405180910390fd5b620008ee7f4c454e44494e475f504f4f4c00000000000000000000000000000000000000008262000f5a565b8073ffffffffffffffffffffffffffffffffffffffff167fc4e6c6cdf28d0edbd8bcf071d724d33cc2e7a30be7d06443925656e9cb492aa460405160405180910390a250565b6200093e62000f52565b73ffffffffffffffffffffffffffffffffffffffff166200095e62000b0f565b73ffffffffffffffffffffffffffffffffffffffff1614620009b7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620009ae906200184c565b60405180910390fd5b620009c3828262000f5a565b8073ffffffffffffffffffffffffffffffffffffffff167ff2689d5d5cd0c639e137642cae5d40afced201a1a0327e7ac9358461dc9fff3183600160405162000a0e92919062001901565b60405180910390a25050565b600062000a477f504f4f4c5f4f50455241544f5200000000000000000000000000000000000000620003b7565b905090565b62000a5662000f52565b73ffffffffffffffffffffffffffffffffffffffff1662000a7662000b0f565b73ffffffffffffffffffffffffffffffffffffffff161462000acf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ac6906200184c565b60405180910390fd5b62000adb60006200122e565b565b600062000b0a7f4f544f4b454e0000000000000000000000000000000000000000000000000000620003b7565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b62000b4262000f52565b73ffffffffffffffffffffffffffffffffffffffff1662000b6262000b0f565b73ffffffffffffffffffffffffffffffffffffffff161462000bbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000bb2906200184c565b60405180910390fd5b62000be77f4f544f4b454e00000000000000000000000000000000000000000000000000008262000f5a565b8073ffffffffffffffffffffffffffffffffffffffff167fd8aa3b7d78eda4093ae1ef27128086fc99c6e89c5385247f9bf7b3fcf91f197860405160405180910390a250565b600062000c5a7f504f4f4c5f41444d494e00000000000000000000000000000000000000000000620003b7565b905090565b62000c6962000f52565b73ffffffffffffffffffffffffffffffffffffffff1662000c8962000b0f565b73ffffffffffffffffffffffffffffffffffffffff161462000ce2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000cd9906200184c565b60405180910390fd5b806002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167ff2689d5d5cd0c639e137642cae5d40afced201a1a0327e7ac9358461dc9fff3183600060405162000d7f92919062001901565b60405180910390a25050565b600062000db87f454d455247454e43595f41444d494e0000000000000000000000000000000000620003b7565b905090565b62000dc762000f52565b73ffffffffffffffffffffffffffffffffffffffff1662000de762000b0f565b73ffffffffffffffffffffffffffffffffffffffff161462000e40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e37906200184c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000eb3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000eaa90620019a4565b60405180910390fd5b62000ebe816200122e565b50565b62000ecb62000f52565b73ffffffffffffffffffffffffffffffffffffffff1662000eeb62000b0f565b73ffffffffffffffffffffffffffffffffffffffff161462000f44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000f3b906200184c565b60405180910390fd5b62000f4f81620012f2565b50565b600033905090565b60006002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600081905060003060405160240162000fac91906200144a565b6040516020818303038152906040527fc4d66de8000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620011b55730604051620010709062001347565b6200107c91906200144a565b604051809103906000f08015801562001099573d6000803e3d6000fd5b5091508173ffffffffffffffffffffffffffffffffffffffff1663d1f5789485836040518363ffffffff1660e01b8152600401620010d992919062001a23565b600060405180830381600087803b158015620010f457600080fd5b505af115801562001109573d6000803e3d6000fd5b50505050816002600087815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167f1eb35cb4b5bbb23d152f3b4016a5a46c37a07ae930ed0956aba951e23114243886604051620011a7919062001a57565b60405180910390a262001227565b8173ffffffffffffffffffffffffffffffffffffffff16634f1ef28685836040518363ffffffff1660e01b8152600401620011f292919062001a23565b600060405180830381600087803b1580156200120d57600080fd5b505af115801562001222573d6000803e3d6000fd5b505050505b5050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600190805190602001906200130a92919062001355565b507f5e667c32fd847cf8bce48ab3400175cbf107bdc82b2dea62e3364909dfaee799816040516200133c9190620015ef565b60405180910390a150565b610dc08062001a7583390190565b82805462001363906200189d565b90600052602060002090601f016020900481019282620013875760008555620013d3565b82601f10620013a257805160ff1916838001178555620013d3565b82800160010185558215620013d3579182015b82811115620013d2578251825591602001919060010190620013b5565b5b509050620013e29190620013e6565b5090565b5b8082111562001401576000816000905550600101620013e7565b5090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620014328262001405565b9050919050565b620014448162001425565b82525050565b600060208201905062001461600083018462001439565b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b62001490816200147b565b81146200149c57600080fd5b50565b600081359050620014b08162001485565b92915050565b600060208284031215620014cf57620014ce62001471565b5b6000620014df848285016200149f565b91505092915050565b620014f38162001425565b8114620014ff57600080fd5b50565b6000813590506200151381620014e8565b92915050565b60006020828403121562001532576200153162001471565b5b6000620015428482850162001502565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620015875780820151818401526020810190506200156a565b8381111562001597576000848401525b50505050565b6000601f19601f8301169050919050565b6000620015bb826200154b565b620015c7818562001556565b9350620015d981856020860162001567565b620015e4816200159d565b840191505092915050565b600060208201905081810360008301526200160b8184620015ae565b905092915050565b600080604083850312156200162d576200162c62001471565b5b60006200163d858286016200149f565b9250506020620016508582860162001502565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200169e826200159d565b810181811067ffffffffffffffff82111715620016c057620016bf62001664565b5b80604052505050565b6000620016d562001467565b9050620016e3828262001693565b919050565b600067ffffffffffffffff82111562001706576200170562001664565b5b62001711826200159d565b9050602081019050919050565b82818337600083830152505050565b6000620017446200173e84620016e8565b620016c9565b9050828152602081018484840111156200176357620017626200165f565b5b620017708482856200171e565b509392505050565b600082601f83011262001790576200178f6200165a565b5b8135620017a28482602086016200172d565b91505092915050565b600060208284031215620017c457620017c362001471565b5b600082013567ffffffffffffffff811115620017e557620017e462001476565b5b620017f38482850162001778565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006200183460208362001556565b91506200184182620017fc565b602082019050919050565b60006020820190508181036000830152620018678162001825565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620018b657607f821691505b60208210811415620018cd57620018cc6200186e565b5b50919050565b620018de816200147b565b82525050565b60008115159050919050565b620018fb81620018e4565b82525050565b6000604082019050620019186000830185620018d3565b620019276020830184620018f0565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200198c60268362001556565b915062001999826200192e565b604082019050919050565b60006020820190508181036000830152620019bf816200197d565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000620019ef82620019c6565b620019fb8185620019d1565b935062001a0d81856020860162001567565b62001a18816200159d565b840191505092915050565b600060408201905062001a3a600083018562001439565b818103602083015262001a4e8184620019e2565b90509392505050565b600060208201905062001a6e6000830184620018d3565b9291505056fe60a060405234801561001057600080fd5b50604051610dc0380380610dc0833981810160405281019061003291906100d1565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050506100fe565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009e82610073565b9050919050565b6100ae81610093565b81146100b957600080fd5b50565b6000815190506100cb816100a5565b92915050565b6000602082840312156100e7576100e661006e565b5b60006100f5848285016100bc565b91505092915050565b608051610c8461013c6000396000818161012c0152818161019a01528181610284015281816104280152818161047c01526105d70152610c846000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100595780634f1ef286146100825780635c60da1b1461009e578063d1f57894146100c9578063f851a440146100e55761004f565b5b610057610110565b005b34801561006557600080fd5b50610080600480360381019061007b91906106f5565b61012a565b005b61009c60048036038101906100979190610787565b610198565b005b3480156100aa57600080fd5b506100b3610280565b6040516100c091906107f6565b60405180910390f35b6100e360048036038101906100de9190610952565b6102f1565b005b3480156100f157600080fd5b506100fa610424565b60405161010791906107f6565b60405180910390f35b6101186104ae565b6101286101236104b8565b6104e9565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561018c576101878161050f565b610195565b610194610110565b5b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610272576101f58361050f565b60008373ffffffffffffffffffffffffffffffffffffffff16838360405161021e9291906109de565b600060405180830381855af49150503d8060008114610259576040519150601f19603f3d011682016040523d82523d6000602084013e61025e565b606091505b505090508061026c57600080fd5b5061027b565b61027a610110565b5b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102e5576102de6104b8565b90506102ee565b6102ed610110565b5b90565b600073ffffffffffffffffffffffffffffffffffffffff166103116104b8565b73ffffffffffffffffffffffffffffffffffffffff161461033157600080fd5b60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6103619190610a30565b60001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b1461039657610395610a64565b5b61039f8261055e565b6000815111156104205760008273ffffffffffffffffffffffffffffffffffffffff16826040516103d09190610b02565b600060405180830381855af49150503d806000811461040b576040519150601f19603f3d011682016040523d82523d6000602084013e610410565b606091505b505090508061041e57600080fd5b505b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156104a2577f000000000000000000000000000000000000000000000000000000000000000090506104ab565b6104aa610110565b5b90565b6104b66105d5565b565b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b9050805491505090565b3660008037600080366000845af43d6000803e806000811461050a573d6000f35b3d6000fd5b6105188161055e565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6105678161066e565b6105a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059d90610b9c565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181555050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b90610c2e565b60405180910390fd5b61066c610681565b565b600080823b905060008111915050919050565b565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106c282610697565b9050919050565b6106d2816106b7565b81146106dd57600080fd5b50565b6000813590506106ef816106c9565b92915050565b60006020828403121561070b5761070a61068d565b5b6000610719848285016106e0565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261074757610746610722565b5b8235905067ffffffffffffffff81111561076457610763610727565b5b6020830191508360018202830111156107805761077f61072c565b5b9250929050565b6000806000604084860312156107a05761079f61068d565b5b60006107ae868287016106e0565b935050602084013567ffffffffffffffff8111156107cf576107ce610692565b5b6107db86828701610731565b92509250509250925092565b6107f0816106b7565b82525050565b600060208201905061080b60008301846107e7565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61085f82610816565b810181811067ffffffffffffffff8211171561087e5761087d610827565b5b80604052505050565b6000610891610683565b905061089d8282610856565b919050565b600067ffffffffffffffff8211156108bd576108bc610827565b5b6108c682610816565b9050602081019050919050565b82818337600083830152505050565b60006108f56108f0846108a2565b610887565b90508281526020810184848401111561091157610910610811565b5b61091c8482856108d3565b509392505050565b600082601f83011261093957610938610722565b5b81356109498482602086016108e2565b91505092915050565b600080604083850312156109695761096861068d565b5b6000610977858286016106e0565b925050602083013567ffffffffffffffff81111561099857610997610692565b5b6109a485828601610924565b9150509250929050565b600081905092915050565b60006109c583856109ae565b93506109d28385846108d3565b82840190509392505050565b60006109eb8284866109b9565b91508190509392505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a3b826109f7565b9150610a46836109f7565b925082821015610a5957610a58610a01565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600081519050919050565b60005b83811015610abc578082015181840152602081019050610aa1565b83811115610acb576000848401525b50505050565b6000610adc82610a93565b610ae681856109ae565b9350610af6818560208601610a9e565b80840191505092915050565b6000610b0e8284610ad1565b915081905092915050565b600082825260208201905092915050565b7f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60008201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000602082015250565b6000610b86603b83610b19565b9150610b9182610b2a565b604082019050919050565b60006020820190508181036000830152610bb581610b79565b9050919050565b7f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260008201527f6f6d207468652070726f78792061646d696e0000000000000000000000000000602082015250565b6000610c18603283610b19565b9150610c2382610bbc565b604082019050919050565b60006020820190508181036000830152610c4781610c0b565b905091905056fea2646970667358221220d372d6ce3b5f383108485f22523722ae932805917b0bcc76637403c72911f69964736f6c63430008090033a264697066735822122076aadf5da3ff3c8975874f44f96dd97a31b32c15786423d2d8b27e66760e10e164736f6c63430008090033";

type LendingPoolAddressesProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LendingPoolAddressesProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LendingPoolAddressesProvider__factory extends ContractFactory {
  constructor(...args: LendingPoolAddressesProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    marketId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LendingPoolAddressesProvider> {
    return super.deploy(
      marketId,
      overrides || {}
    ) as Promise<LendingPoolAddressesProvider>;
  }
  override getDeployTransaction(
    marketId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(marketId, overrides || {});
  }
  override attach(address: string): LendingPoolAddressesProvider {
    return super.attach(address) as LendingPoolAddressesProvider;
  }
  override connect(signer: Signer): LendingPoolAddressesProvider__factory {
    return super.connect(signer) as LendingPoolAddressesProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LendingPoolAddressesProviderInterface {
    return new utils.Interface(_abi) as LendingPoolAddressesProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolAddressesProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolAddressesProvider;
  }
}
