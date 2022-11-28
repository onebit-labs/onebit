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
    name: "KYCAdminUpdated",
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
    name: "LendingPoolConfiguratorUpdated",
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
    name: "getKYCAdmin",
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
    name: "getLendingPoolConfigurator",
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
        name: "kycAdmin",
        type: "address",
      },
    ],
    name: "setKYCAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "configurator",
        type: "address",
      },
    ],
    name: "setLendingPoolConfiguratorImpl",
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
  "0x60806040523480156200001157600080fd5b5060405162001a9138038062001a918339810160408190526200003491620001e2565b6200003f3362000051565b6200004a81620000a1565b506200030c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051620000b6906001906020840190620000f3565b507f5e667c32fd847cf8bce48ab3400175cbf107bdc82b2dea62e3364909dfaee79981604051620000e891906200029a565b60405180910390a150565b8280546200010190620002cf565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001cc578181015183820152602001620001b2565b83811115620001dc576000848401525b50505050565b600060208284031215620001f557600080fd5b81516001600160401b03808211156200020d57600080fd5b818401915084601f8301126200022257600080fd5b81518181111562000237576200023762000199565b604051601f8201601f19908116603f0116810190838211818310171562000262576200026262000199565b816040528281528760208487010111156200027c57600080fd5b6200028f836020830160208801620001af565b979650505050505050565b6020815260008251806020840152620002bb816040850160208701620001af565b601f01601f19169190910160400192915050565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611775806200031c6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063c12542df11610071578063c12542df1461022b578063ca446dd91461023e578063ddcaa9ea14610251578063f2fde38b14610259578063f67b18471461026c57600080fd5b8063715018a6146101fa578063766ffb901461020257806385c858b11461020a5780638da5cb5b14610212578063aecda3781461022357600080fd5b8063409f8c48116100f4578063409f8c48146101a4578063568ef470146101b75780635aef021f146101cc5780635dcc528c146101df5780636d44f55d146101f257600080fd5b80630261bf8b1461013157806321f8a72114610156578063283d62ad1461016957806335ad1e031461017e57806335da339414610191575b600080fd5b61013961027f565b6040516001600160a01b0390911681526020015b60405180910390f35b610139610164366004610caf565b61029e565b61017c610177366004610ce4565b6102b9565b005b61017c61018c366004610ce4565b61036c565b61017c61019f366004610ce4565b610419565b61017c6101b2366004610ce4565b6104c8565b6101bf610571565b60405161014d9190610d53565b61017c6101da366004610ce4565b610603565b61017c6101ed366004610d66565b61067d565b6101396106fa565b61017c610715565b61013961074b565b610139610762565b6000546001600160a01b0316610139565b610139610789565b61017c610239366004610ce4565b6107a1565b61017c61024c366004610d66565b610828565b6101396108b3565b61017c610267366004610ce4565b6108d0565b61017c61027a366004610da8565b61096b565b60006102996b13115391125391d7d413d3d360a21b61029e565b905090565b6000908152600260205260409020546001600160a01b031690565b6000546001600160a01b031633146102ec5760405162461bcd60e51b81526004016102e390610e59565b60405180910390fd5b692827a7a62fa0a226a4a760b11b600090815260026020527f8625fbc469bac10fd11de1d783dcd446542784dbcc535ef64a1da61860fda74c80546001600160a01b0319166001600160a01b03841690811790915560405190917fc20a317155a9e7d84e06b716b4b355d47742ab9f8c5d630e7f556553f582430d91a250565b6000546001600160a01b031633146103965760405162461bcd60e51b81526004016102e390610e59565b6c2827a7a62fa7a822a920aa27a960991b600090815260026020527fa9d39da1b78184f4879de7d784b88d98b1e74dd5a013811ff31e734754785f2080546001600160a01b0319166001600160a01b03841690811790915560405190917fa765d64378c184db6ffc9d51203fd4365f218ccf4b1cd93092ca7dc15efe5def91a250565b6000546001600160a01b031633146104435760405162461bcd60e51b81526004016102e390610e59565b6e22a6a2a923a2a721acafa0a226a4a760891b600090815260026020527f767aa9c986e1d88108b2558f00fbd21b689a0397581446e2e868cd70421026cc80546001600160a01b0319166001600160a01b03841690811790915560405190917fe19673fc861bfeb894cf2d6b7662505497ef31c0f489b742db24ee331082691691a250565b6000546001600160a01b031633146104f25760405162461bcd60e51b81526004016102e390610e59565b6825aca1afa0a226a4a760b91b600090815260026020527f344e58101016a5b2a6fcfce4617a85fb4712cc1c9313cb49e800cf5010292a4580546001600160a01b0319166001600160a01b03841690811790915560405190917fa0ca161b1de377a07b59a6c960bda2feb27c9e47397c6e8e8296f4a093a1340191a250565b60606001805461058090610e8e565b80601f01602080910402602001604051908101604052809291908181526020018280546105ac90610e8e565b80156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b5050505050905090565b6000546001600160a01b0316331461062d5760405162461bcd60e51b81526004016102e390610e59565b6106466b13115391125391d7d413d3d360a21b8261099e565b6040516001600160a01b038216907fc4e6c6cdf28d0edbd8bcf071d724d33cc2e7a30be7d06443925656e9cb492aa490600090a250565b6000546001600160a01b031633146106a75760405162461bcd60e51b81526004016102e390610e59565b6106b1828261099e565b60408051838152600160208201526001600160a01b038316917ff2689d5d5cd0c639e137642cae5d40afced201a1a0327e7ac9358461dc9fff3191015b60405180910390a25050565b60006102996c2827a7a62fa7a822a920aa27a960991b61029e565b6000546001600160a01b0316331461073f5760405162461bcd60e51b81526004016102e390610e59565b6107496000610b6b565b565b60006102996825aca1afa0a226a4a760b91b61029e565b6000610299782622a72224a723afa827a7a62fa1a7a72324a3aaa920aa27a960391b61029e565b6000610299692827a7a62fa0a226a4a760b11b61029e565b6000546001600160a01b031633146107cb5760405162461bcd60e51b81526004016102e390610e59565b6107f1782622a72224a723afa827a7a62fa1a7a72324a3aaa920aa27a960391b8261099e565b6040516001600160a01b038216907fdfabe479bad36782fb1e77fbfddd4e382671713527e4786cfc93a022ae76372990600090a250565b6000546001600160a01b031633146108525760405162461bcd60e51b81526004016102e390610e59565b600082815260026020908152604080832080546001600160a01b0319166001600160a01b0386169081179091558151868152928301939093527ff2689d5d5cd0c639e137642cae5d40afced201a1a0327e7ac9358461dc9fff3191016106ee565b60006102996e22a6a2a923a2a721acafa0a226a4a760891b61029e565b6000546001600160a01b031633146108fa5760405162461bcd60e51b81526004016102e390610e59565b6001600160a01b03811661095f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102e3565b61096881610b6b565b50565b6000546001600160a01b031633146109955760405162461bcd60e51b81526004016102e390610e59565b61096881610bbb565b6000828152600260205260408082205490513060248201526001600160a01b0390911691829160440160408051601f198184030181529190526020810180516001600160e01b031663189acdbd60e31b17905290506001600160a01b038316610b035730604051610a0e90610c09565b6001600160a01b039091168152602001604051809103906000f080158015610a3a573d6000803e3d6000fd5b5060405163347d5e2560e21b81529092506001600160a01b0383169063d1f5789490610a6c9087908590600401610ec9565b600060405180830381600087803b158015610a8657600080fd5b505af1158015610a9a573d6000803e3d6000fd5b50505060008681526002602090815260409182902080546001600160a01b0319166001600160a01b03871690811790915591518881529192507f1eb35cb4b5bbb23d152f3b4016a5a46c37a07ae930ed0956aba951e231142438910160405180910390a2610b64565b60405163278f794360e11b81526001600160a01b03831690634f1ef28690610b319087908590600401610ec9565b600060405180830381600087803b158015610b4b57600080fd5b505af1158015610b5f573d6000803e3d6000fd5b505050505b5050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051610bce906001906020840190610c16565b507f5e667c32fd847cf8bce48ab3400175cbf107bdc82b2dea62e3364909dfaee79981604051610bfe9190610d53565b60405180910390a150565b61084a80610ef683390190565b828054610c2290610e8e565b90600052602060002090601f016020900481019282610c445760008555610c8a565b82601f10610c5d57805160ff1916838001178555610c8a565b82800160010185558215610c8a579182015b82811115610c8a578251825591602001919060010190610c6f565b50610c96929150610c9a565b5090565b5b80821115610c965760008155600101610c9b565b600060208284031215610cc157600080fd5b5035919050565b80356001600160a01b0381168114610cdf57600080fd5b919050565b600060208284031215610cf657600080fd5b610cff82610cc8565b9392505050565b6000815180845260005b81811015610d2c57602081850181015186830182015201610d10565b81811115610d3e576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610cff6020830184610d06565b60008060408385031215610d7957600080fd5b82359150610d8960208401610cc8565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610dba57600080fd5b813567ffffffffffffffff80821115610dd257600080fd5b818401915084601f830112610de657600080fd5b813581811115610df857610df8610d92565b604051601f8201601f19908116603f01168101908382118183101715610e2057610e20610d92565b81604052828152876020848701011115610e3957600080fd5b826020860160208301376000928101602001929092525095945050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c90821680610ea257607f821691505b60208210811415610ec357634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0383168152604060208201819052600090610eed90830184610d06565b94935050505056fe60a060405234801561001057600080fd5b5060405161084a38038061084a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161079c6100ae600039600081816101130152818161015801528181610211015281816103510152818161037a015261049e015261079c6000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100745780635c60da1b14610087578063d1f57894146100b8578063f851a440146100cb575b6100526100e0565b005b34801561006057600080fd5b5061005261006f366004610543565b610108565b610052610082366004610565565b61014d565b34801561009357600080fd5b5061009c610204565b6040516001600160a01b03909116815260200160405180910390f35b6100526100c63660046105fe565b610256565b3480156100d757600080fd5b5061009c610344565b6100e861039c565b6101066101016000805160206107478339815191525490565b6103a4565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561014557610142816103c8565b50565b6101426100e0565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101f757610187836103c8565b6000836001600160a01b031683836040516101a39291906106c0565b600060405180830381855af49150503d80600081146101de576040519150601f19603f3d011682016040523d82523d6000602084013e6101e3565b606091505b50509050806101f157600080fd5b50505050565b6101ff6100e0565b505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561024b57506000805160206107478339815191525490565b6102536100e0565b90565b600061026e6000805160206107478339815191525490565b6001600160a01b03161461028157600080fd5b6102ac60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6106d0565b600080516020610747833981519152146102c8576102c86106f5565b6102d182610408565b805115610340576000826001600160a01b0316826040516102f2919061070b565b600060405180830381855af49150503d806000811461032d576040519150601f19603f3d011682016040523d82523d6000602084013e610332565b606091505b50509050806101ff57600080fd5b5050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561024b57507f000000000000000000000000000000000000000000000000000000000000000090565b610106610493565b3660008037600080366000845af43d6000803e8080156103c3573d6000f35b3d6000fd5b6103d181610408565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6104815760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084015b60405180910390fd5b60008051602061074783398151915255565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101065760405162461bcd60e51b815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527137b6903a343290383937bc3c9030b236b4b760711b6064820152608401610478565b80356001600160a01b038116811461053e57600080fd5b919050565b60006020828403121561055557600080fd5b61055e82610527565b9392505050565b60008060006040848603121561057a57600080fd5b61058384610527565b9250602084013567ffffffffffffffff808211156105a057600080fd5b818601915086601f8301126105b457600080fd5b8135818111156105c357600080fd5b8760208285010111156105d557600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561061157600080fd5b61061a83610527565b9150602083013567ffffffffffffffff8082111561063757600080fd5b818501915085601f83011261064b57600080fd5b81358181111561065d5761065d6105e8565b604051601f8201601f19908116603f01168101908382118183101715610685576106856105e8565b8160405282815288602084870101111561069e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b8183823760009101908152919050565b6000828210156106f057634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825160005b8181101561072c5760208186018101518583015201610712565b8181111561073b576000828501525b50919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220da8377213e8c600ec5301a1e6bd2f4f5cf7cfe5474ad7981fe546f74eab0ce9b64736f6c63430008090033a2646970667358221220bd709efb6ba3f82d650090f6b7bc91fc77fcf4ccce73e0ce626d72957bc04fbf64736f6c63430008090033";

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
