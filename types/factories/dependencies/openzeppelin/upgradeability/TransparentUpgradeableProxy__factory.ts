/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../../../dependencies/openzeppelin/upgradeability/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162000f2838038062000f28833981016040819052620000269162000507565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd620005e7565b60008051602062000ee1833981519152146200007557620000756200060d565b6200008382826000620000e7565b50620000b3905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104620005e7565b60008051602062000ec183398151915214620000d357620000d36200060d565b620000de8262000124565b50505062000676565b620000f2836200017f565b600082511180620001005750805b156200011f576200011d8383620001c160201b6200024f1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200014f620001f0565b604080516001600160a01b03928316815291841660208301520160405180910390a16200017c8162000229565b50565b6200018a81620002de565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001e9838360405180606001604052806027815260200162000f016027913962000381565b9392505050565b60006200021a60008051602062000ec183398151915260001b6200045e60201b620001f71760201c565b546001600160a01b0316919050565b6001600160a01b038116620002945760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b80620002bd60008051602062000ec183398151915260001b6200045e60201b620001f71760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002f4816200046160201b6200027b1760201c565b620003585760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200028b565b80620002bd60008051602062000ee183398151915260001b6200045e60201b620001f71760201c565b6060833b620003e25760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016200028b565b600080856001600160a01b031685604051620003ff919062000623565b600060405180830381855af49150503d80600081146200043c576040519150601f19603f3d011682016040523d82523d6000602084013e62000441565b606091505b5090925090506200045482828662000467565b9695505050505050565b90565b3b151590565b6060831562000478575081620001e9565b825115620004895782518084602001fd5b8160405162461bcd60e51b81526004016200028b919062000641565b80516001600160a01b0381168114620004bd57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004f5578181015183820152602001620004db565b838111156200011d5750506000910152565b6000806000606084860312156200051d57600080fd5b6200052884620004a5565b92506200053860208501620004a5565b60408501519092506001600160401b03808211156200055657600080fd5b818601915086601f8301126200056b57600080fd5b815181811115620005805762000580620004c2565b604051601f8201601f19908116603f01168101908382118183101715620005ab57620005ab620004c2565b81604052828152896020848701011115620005c557600080fd5b620005d8836020830160208801620004d8565b80955050505050509250925092565b6000828210156200060857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825162000637818460208701620004d8565b9190910192915050565b602081526000825180602084015262000662816040850160208701620004d8565b601f01601f19169190910160400192915050565b61083b80620006866000396000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100745780635c60da1b146100875780638f283970146100b8578063f851a440146100d8575b6100526100ed565b005b34801561006057600080fd5b5061005261006f3660046106c5565b610107565b6100526100823660046106e0565b61014e565b34801561009357600080fd5b5061009c6101bf565b6040516001600160a01b03909116815260200160405180910390f35b3480156100c457600080fd5b506100526100d33660046106c5565b6101fa565b3480156100e457600080fd5b5061009c610224565b6100f5610281565b610105610100610320565b61032a565b565b61010f61034e565b6001600160a01b0316336001600160a01b031614156101465761014381604051806020016040528060008152506000610381565b50565b6101436100ed565b61015661034e565b6001600160a01b0316336001600160a01b031614156101b7576101b28383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610381915050565b505050565b6101b26100ed565b60006101c961034e565b6001600160a01b0316336001600160a01b031614156101ef576101ea610320565b905090565b6101f76100ed565b90565b61020261034e565b6001600160a01b0316336001600160a01b0316141561014657610143816103ac565b600061022e61034e565b6001600160a01b0316336001600160a01b031614156101ef576101ea61034e565b606061027483836040518060600160405280602781526020016107df60279139610400565b9392505050565b3b151590565b61028961034e565b6001600160a01b0316336001600160a01b031614156101055760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101ea6104d4565b3660008037600080366000845af43d6000803e808015610349573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b61038a836104fc565b6000825111806103975750805b156101b2576103a6838361024f565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103d561034e565b604080516001600160a01b03928316815291841660208301520160405180910390a16101438161053c565b6060833b61045f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610317565b600080856001600160a01b03168560405161047a919061078f565b600060405180830381855af49150503d80600081146104b5576040519150601f19603f3d011682016040523d82523d6000602084013e6104ba565b606091505b50915091506104ca8282866105e5565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610372565b6105058161061e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105a15760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610317565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b606083156105f4575081610274565b8251156106045782518084602001fd5b8160405162461bcd60e51b815260040161031791906107ab565b803b6106825760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610317565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105c4565b80356001600160a01b03811681146106c057600080fd5b919050565b6000602082840312156106d757600080fd5b610274826106a9565b6000806000604084860312156106f557600080fd5b6106fe846106a9565b9250602084013567ffffffffffffffff8082111561071b57600080fd5b818601915086601f83011261072f57600080fd5b81358181111561073e57600080fd5b87602082850101111561075057600080fd5b6020830194508093505050509250925092565b60005b8381101561077e578181015183820152602001610766565b838111156103a65750506000910152565b600082516107a1818460208701610763565b9190910192915050565b60208152600082518060208401526107ca816040850160208701610763565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d1090f5bc06fcd5bdce1d75b269cbbd0085dad2777babb13d7597ac7db9bff9b64736f6c63430008090033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  override connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
