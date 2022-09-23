/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BaseAdminUpgradeabilityProxy,
  BaseAdminUpgradeabilityProxyInterface,
} from "../../../../dependencies/openzeppelin/upgradeability/BaseAdminUpgradeabilityProxy";

const _abi = [
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
        name: "",
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
        name: "",
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
  "0x608060405234801561001057600080fd5b50610a24806100206000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100595780634f1ef286146100825780635c60da1b1461009e5780638f283970146100c9578063f851a440146100f25761004f565b5b61005761011d565b005b34801561006557600080fd5b50610080600480360381019061007b919061068a565b610137565b005b61009c6004803603810190610097919061071c565b61018c565b005b3480156100aa57600080fd5b506100b361025b565b6040516100c0919061078b565b60405180910390f35b3480156100d557600080fd5b506100f060048036038101906100eb919061068a565b6102b3565b005b3480156100fe57600080fd5b506101076103b8565b604051610114919061078b565b60405180910390f35b610125610410565b610135610130610490565b6104c1565b565b61013f6104e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101805761017b81610518565b610189565b61018861011d565b5b50565b6101946104e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561024d576101d083610518565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516101f99291906107e5565b600060405180830381855af49150503d8060008114610234576040519150601f19603f3d011682016040523d82523d6000602084013e610239565b606091505b505090508061024757600080fd5b50610256565b61025561011d565b5b505050565b60006102656104e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102a7576102a0610490565b90506102b0565b6102af61011d565b5b90565b6102bb6104e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156103ac57600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561035e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590610881565b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103876104e7565b826040516103969291906108a1565b60405180910390a16103a781610567565b6103b5565b6103b461011d565b5b50565b60006103c26104e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610404576103fd6104e7565b905061040d565b61040c61011d565b5b90565b6104186104e7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d9061093c565b60405180910390fd5b61048e610596565b565b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b9050805491505090565b3660008037600080366000845af43d6000803e80600081146104e2573d6000f35b3d6000fd5b6000807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b9050805491505090565b61052181610598565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b90508181555050565b565b6105a18161060f565b6105e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d7906109ce565b60405180910390fd5b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b90508181555050565b600080823b905060008111915050919050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106578261062c565b9050919050565b6106678161064c565b811461067257600080fd5b50565b6000813590506106848161065e565b92915050565b6000602082840312156106a05761069f610622565b5b60006106ae84828501610675565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126106dc576106db6106b7565b5b8235905067ffffffffffffffff8111156106f9576106f86106bc565b5b602083019150836001820283011115610715576107146106c1565b5b9250929050565b60008060006040848603121561073557610734610622565b5b600061074386828701610675565b935050602084013567ffffffffffffffff81111561076457610763610627565b5b610770868287016106c6565b92509250509250925092565b6107858161064c565b82525050565b60006020820190506107a0600083018461077c565b92915050565b600081905092915050565b82818337600083830152505050565b60006107cc83856107a6565b93506107d98385846107b1565b82840190509392505050565b60006107f28284866107c0565b91508190509392505050565b600082825260208201905092915050565b7f43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f60008201527f787920746f20746865207a65726f206164647265737300000000000000000000602082015250565b600061086b6036836107fe565b91506108768261080f565b604082019050919050565b6000602082019050818103600083015261089a8161085e565b9050919050565b60006040820190506108b6600083018561077c565b6108c3602083018461077c565b9392505050565b7f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260008201527f6f6d207468652070726f78792061646d696e0000000000000000000000000000602082015250565b60006109266032836107fe565b9150610931826108ca565b604082019050919050565b6000602082019050818103600083015261095581610919565b9050919050565b7f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60008201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000602082015250565b60006109b8603b836107fe565b91506109c38261095c565b604082019050919050565b600060208201905081810360008301526109e7816109ab565b905091905056fea26469706673582212209e64235c60056f8e70b0687857bbf7374a732980a10df71be7030b6a9779c6f964736f6c63430008090033";

type BaseAdminUpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseAdminUpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseAdminUpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: BaseAdminUpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseAdminUpgradeabilityProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<BaseAdminUpgradeabilityProxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BaseAdminUpgradeabilityProxy {
    return super.attach(address) as BaseAdminUpgradeabilityProxy;
  }
  override connect(signer: Signer): BaseAdminUpgradeabilityProxy__factory {
    return super.connect(signer) as BaseAdminUpgradeabilityProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseAdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as BaseAdminUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseAdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseAdminUpgradeabilityProxy;
  }
}
