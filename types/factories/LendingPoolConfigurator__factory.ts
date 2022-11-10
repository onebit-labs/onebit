/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LendingPoolConfigurator,
  LendingPoolConfiguratorInterface,
} from "../LendingPoolConfigurator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "OTokenUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ReserveActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ReserveDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "ReserveDecimalsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ReserveFrozen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oToken",
        type: "address",
      },
    ],
    name: "ReserveInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ReserveUnfrozen",
    type: "event",
  },
  {
    inputs: [],
    name: "activateReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deactivateReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freezeReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "oTokenImpl",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "underlyingAssetDecimals",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "fundAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "underlyingAssetName",
            type: "string",
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
        internalType: "struct ILendingPoolConfigurator.InitReserveInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "initReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
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
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setPoolPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unfreezeReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fundAddress",
        type: "address",
      },
    ],
    name: "updateFundAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "implementation",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "params",
            type: "bytes",
          },
        ],
        internalType: "struct ILendingPoolConfigurator.UpdateOTokenInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "updateOToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506121a6806100246000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637641f3d9116100665780637641f3d9146100c5578063a6eaa73a146100d8578063c15d7c78146100eb578063c4d66de8146100fe578063da97d91e1461011157600080fd5b80631d5459f71461009857806368b5216d146100ad57806369d5c400146100b55780636d5816f9146100bd575b600080fd5b6100ab6100a636600461143b565b610119565b005b6100ab610247565b6100ab610423565b6100ab6105ff565b6100ab6100d336600461145f565b6107db565b6100ab6100e6366004611481565b6108fd565b6100ab6100f93660046114bd565b610c77565b6100ab61010c36600461143b565b610f32565b6100ab611093565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b15801561015d57600080fd5b505afa158015610171573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101959190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906101e15760405162461bcd60e51b81526004016101d89190611572565b60405180910390fd5b5060355460405163e0b8ff7360e01b81526001600160a01b03838116600483015290911690819063e0b8ff7390602401600060405180830381600087803b15801561022b57600080fd5b505af115801561023f573d6000803e3d6000fd5b505050505050565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b15801561028b57600080fd5b505afa15801561029f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c39190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906103065760405162461bcd60e51b81526004016101d89190611572565b5060355460408051636bd50cef60e01b815290516000926001600160a01b031691636bd50cef916004808301926020929190829003018186803b15801561034c57600080fd5b505afa158015610360573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610384919061160d565b905061039181600061126f565b6035548151604051630ad40df160e01b81526001600160a01b0390921691630ad40df1916103c59160040190815260200190565b600060405180830381600087803b1580156103df57600080fd5b505af11580156103f3573d6000803e3d6000fd5b50506040517f2514adce50efe1aa6ab22eb84b714d97f8c1a0d0e40e69e5607294062aab2908925060009150a150565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b15801561046757600080fd5b505afa15801561047b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049f9190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906104e25760405162461bcd60e51b81526004016101d89190611572565b5060355460408051636bd50cef60e01b815290516000926001600160a01b031691636bd50cef916004808301926020929190829003018186803b15801561052857600080fd5b505afa15801561053c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610560919061160d565b905061056d816000611297565b6035548151604051630ad40df160e01b81526001600160a01b0390921691630ad40df1916105a19160040190815260200190565b600060405180830381600087803b1580156105bb57600080fd5b505af11580156105cf573d6000803e3d6000fd5b50506040517f51a980a7fa36f4e38e857a73e3f95d9853681ca2e5b433a59a44f202180d03fb925060009150a150565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b15801561064357600080fd5b505afa158015610657573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067b9190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906106be5760405162461bcd60e51b81526004016101d89190611572565b5060355460408051636bd50cef60e01b815290516000926001600160a01b031691636bd50cef916004808301926020929190829003018186803b15801561070457600080fd5b505afa158015610718573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073c919061160d565b905061074981600161126f565b6035548151604051630ad40df160e01b81526001600160a01b0390921691630ad40df19161077d9160040190815260200190565b600060405180830381600087803b15801561079757600080fd5b505af11580156107ab573d6000803e3d6000fd5b50506040517f6d305815876e38d7fbfc11c2052825886f621b3a73ed3fdb74c471b79bc65e67925060009150a150565b60345460408051636ee554f560e11b8152905133926001600160a01b03169163ddcaa9ea916004808301926020929190829003018186803b15801561081f57600080fd5b505afa158015610833573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108579190611508565b6001600160a01b031614604051806040016040528060028152602001611b9b60f11b8152509061089a5760405162461bcd60e51b81526004016101d89190611572565b5060355460405163bedb86fb60e01b815282151560048201526001600160a01b039091169063bedb86fb90602401600060405180830381600087803b1580156108e257600080fd5b505af11580156108f6573d6000803e3d6000fd5b5050505050565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b15801561094157600080fd5b505afa158015610955573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109799190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906109bc5760405162461bcd60e51b81526004016101d89190611572565b506000610a7a6109cf602084018461143b565b603554637fdd585f60e01b906001600160a01b03166109f4606087016040880161143b565b610a046040880160208901611629565b610a1160a089018961164c565b610a1e60c08b018b61164c565b610a2b60e08d018d61164c565b604051602401610a43999897969594939291906116c3565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526112bf565b6035549091506001600160a01b0316636c3fbb8082610a9f608086016060870161143b565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401600060405180830381600087803b158015610ae757600080fd5b505af1158015610afb573d6000803e3d6000fd5b505050506000603560009054906101000a90046001600160a01b03166001600160a01b0316636bd50cef6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b4f57600080fd5b505afa158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b87919061160d565b9050610ba6610b9c6040850160208601611629565b829060ff16611367565b610bb1816001611297565b610bbc81600061126f565b6035548151604051630ad40df160e01b81526001600160a01b0390921691630ad40df191610bf09160040190815260200190565b600060405180830381600087803b158015610c0a57600080fd5b505af1158015610c1e573d6000803e3d6000fd5b5050506001600160a01b0383169050610c3d606085016040860161143b565b6001600160a01b03167f7f03a90a3da1498e81b86239a6f5cd9eeac48d99d2eda802eb618a411e15f5bd60405160405180910390a3505050565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b158015610cbb57600080fd5b505afa158015610ccf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf39190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b81525090610d365760405162461bcd60e51b81526004016101d89190611572565b50603554604080516302df782f60e11b815290516001600160a01b039092169160009183916305bef05e916004808201926101c092909190829003018186803b158015610d8257600080fd5b505afa158015610d96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dba919061178a565b90506000610e39836001600160a01b0316636bd50cef6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dfa57600080fd5b505afa158015610e0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e32919061160d565b5160ff1690565b90506000637fdd585f60e01b8483610e51888061164c565b610e5e60208b018b61164c565b610e6b60608d018d61164c565b604051602401610e8298979695949392919061189b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252610160850151909250610ed791610ed1906060890190890161143b565b836113ae565b610ee7606086016040870161143b565b6001600160a01b03168361016001516001600160a01b03167f47e210133a1d4df0735eeb239d47219a0a685e37fc47e26f0517eee5cbb2cc9660405160405180910390a35050505050565b6001805460ff1680610f435750303b155b80610f4f575060005481115b610fb25760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b60648201526084016101d8565b60015460ff16158015610fd1576001805460ff19168117905560008290555b603480546001600160a01b0319166001600160a01b03851690811790915560408051630261bf8b60e01b81529051630261bf8b91600480820192602092909190829003018186803b15801561102557600080fd5b505afa158015611039573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105d9190611508565b603580546001600160a01b0319166001600160a01b0392909216919091179055801561108e576001805460ff191690555b505050565b603454604080516315d9b46f60e31b8152905133926001600160a01b03169163aecda378916004808301926020929190829003018186803b1580156110d757600080fd5b505afa1580156110eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110f9190611508565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906111525760405162461bcd60e51b81526004016101d89190611572565b5060355460408051636bd50cef60e01b815290516000926001600160a01b031691636bd50cef916004808301926020929190829003018186803b15801561119857600080fd5b505afa1580156111ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d0919061160d565b90506111dd816001611297565b6035548151604051630ad40df160e01b81526001600160a01b0390921691630ad40df1916112119160040190815260200190565b600060405180830381600087803b15801561122b57600080fd5b505af115801561123f573d6000803e3d6000fd5b50506040517f0943962561c5cc364b639cc116ea2b69dfa1be1931155cbc161b55e58712ab10925060009150a150565b60098161127d576000611280565b60015b8351610200191660ff9190911690911b1790915250565b6008816112a55760006112a8565b60015b8351610100191660ff9190911690911b1790915250565b600080306040516112cf90611416565b6001600160a01b039091168152602001604051809103906000f0801580156112fb573d6000803e3d6000fd5b5060405163347d5e2560e21b81529091506001600160a01b0382169063d1f578949061132d90879087906004016118fa565b600060405180830381600087803b15801561134757600080fd5b505af115801561135b573d6000803e3d6000fd5b50929695505050505050565b604080518082019091526002815261037360f41b602082015260ff8211156113a25760405162461bcd60e51b81526004016101d89190611572565b50815160ff1916179052565b60405163278f794360e11b815283906001600160a01b03821690634f1ef286906113de90869086906004016118fa565b600060405180830381600087803b1580156113f857600080fd5b505af115801561140c573d6000803e3d6000fd5b5050505050505050565b61084a8061192783390190565b6001600160a01b038116811461143857600080fd5b50565b60006020828403121561144d57600080fd5b813561145881611423565b9392505050565b60006020828403121561147157600080fd5b8135801515811461145857600080fd5b60006020828403121561149357600080fd5b813567ffffffffffffffff8111156114aa57600080fd5b8201610100818503121561145857600080fd5b6000602082840312156114cf57600080fd5b813567ffffffffffffffff8111156114e657600080fd5b82016080818503121561145857600080fd5b805161150381611423565b919050565b60006020828403121561151a57600080fd5b815161145881611423565b6000815180845260005b8181101561154b5760208185018101518683018201520161152f565b8181111561155d576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006114586020830184611525565b6040516101c0810167ffffffffffffffff811182821017156115b757634e487b7160e01b600052604160045260246000fd5b60405290565b6000602082840312156115cf57600080fd5b6040516020810181811067ffffffffffffffff8211171561160057634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b60006020828403121561161f57600080fd5b61145883836115bd565b60006020828403121561163b57600080fd5b813560ff8116811461145857600080fd5b6000808335601e1984360301811261166357600080fd5b83018035915067ffffffffffffffff82111561167e57600080fd5b60200191503681900382131561169357600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038a811682528916602082015260ff8816604082015260c0606082018190526000906116f9908301888a61169a565b828103608084015261170c81878961169a565b905082810360a084015261172181858761169a565b9c9b505050505050505050505050565b80516fffffffffffffffffffffffffffffffff8116811461150357600080fd5b8051600f81900b811461150357600080fd5b805164ffffffffff8116811461150357600080fd5b805161ffff8116811461150357600080fd5b60006101c0828403121561179d57600080fd5b6117a5611585565b6117af84846115bd565b81526117bd60208401611731565b60208201526117ce60408401611751565b60408201526117df60608401611731565b60608201526117f060808401611731565b608082015261180160a08401611763565b60a082015261181260c08401611763565b60c082015261182360e08401611763565b60e0820152610100611836818501611763565b90820152610120611848848201611778565b9082015261014061185a848201611778565b9082015261016061186c8482016114f8565b9082015261018061187e8482016114f8565b908201526101a0611890848201611731565b908201529392505050565b60018060a01b038916815287602082015260a0604082015260006118c360a08301888a61169a565b82810360608401526118d681878961169a565b905082810360808401526118eb81858761169a565b9b9a5050505050505050505050565b6001600160a01b038316815260406020820181905260009061191e90830184611525565b94935050505056fe60a060405234801561001057600080fd5b5060405161084a38038061084a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161079c6100ae600039600081816101130152818161015801528181610211015281816103510152818161037a015261049e015261079c6000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100745780635c60da1b14610087578063d1f57894146100b8578063f851a440146100cb575b6100526100e0565b005b34801561006057600080fd5b5061005261006f366004610543565b610108565b610052610082366004610565565b61014d565b34801561009357600080fd5b5061009c610204565b6040516001600160a01b03909116815260200160405180910390f35b6100526100c63660046105fe565b610256565b3480156100d757600080fd5b5061009c610344565b6100e861039c565b6101066101016000805160206107478339815191525490565b6103a4565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561014557610142816103c8565b50565b6101426100e0565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101f757610187836103c8565b6000836001600160a01b031683836040516101a39291906106c0565b600060405180830381855af49150503d80600081146101de576040519150601f19603f3d011682016040523d82523d6000602084013e6101e3565b606091505b50509050806101f157600080fd5b50505050565b6101ff6100e0565b505050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561024b57506000805160206107478339815191525490565b6102536100e0565b90565b600061026e6000805160206107478339815191525490565b6001600160a01b03161461028157600080fd5b6102ac60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6106d0565b600080516020610747833981519152146102c8576102c86106f5565b6102d182610408565b805115610340576000826001600160a01b0316826040516102f2919061070b565b600060405180830381855af49150503d806000811461032d576040519150601f19603f3d011682016040523d82523d6000602084013e610332565b606091505b50509050806101ff57600080fd5b5050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561024b57507f000000000000000000000000000000000000000000000000000000000000000090565b610106610493565b3660008037600080366000845af43d6000803e8080156103c3573d6000f35b3d6000fd5b6103d181610408565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6104815760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084015b60405180910390fd5b60008051602061074783398151915255565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156101065760405162461bcd60e51b815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527137b6903a343290383937bc3c9030b236b4b760711b6064820152608401610478565b80356001600160a01b038116811461053e57600080fd5b919050565b60006020828403121561055557600080fd5b61055e82610527565b9392505050565b60008060006040848603121561057a57600080fd5b61058384610527565b9250602084013567ffffffffffffffff808211156105a057600080fd5b818601915086601f8301126105b457600080fd5b8135818111156105c357600080fd5b8760208285010111156105d557600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561061157600080fd5b61061a83610527565b9150602083013567ffffffffffffffff8082111561063757600080fd5b818501915085601f83011261064b57600080fd5b81358181111561065d5761065d6105e8565b604051601f8201601f19908116603f01168101908382118183101715610685576106856105e8565b8160405282815288602084870101111561069e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b8183823760009101908152919050565b6000828210156106f057634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825160005b8181101561072c5760208186018101518583015201610712565b8181111561073b576000828501525b50919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220da8377213e8c600ec5301a1e6bd2f4f5cf7cfe5474ad7981fe546f74eab0ce9b64736f6c63430008090033a26469706673582212207d5dae8b5842088a46c266a5c52dbb20cda2cab9722013b82c540b222db81b9064736f6c63430008090033";

type LendingPoolConfiguratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LendingPoolConfiguratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LendingPoolConfigurator__factory extends ContractFactory {
  constructor(...args: LendingPoolConfiguratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LendingPoolConfigurator> {
    return super.deploy(overrides || {}) as Promise<LendingPoolConfigurator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LendingPoolConfigurator {
    return super.attach(address) as LendingPoolConfigurator;
  }
  override connect(signer: Signer): LendingPoolConfigurator__factory {
    return super.connect(signer) as LendingPoolConfigurator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LendingPoolConfiguratorInterface {
    return new utils.Interface(_abi) as LendingPoolConfiguratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolConfigurator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolConfigurator;
  }
}
