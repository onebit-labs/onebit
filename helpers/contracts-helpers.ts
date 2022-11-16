import { Contract, Signer, ethers } from 'ethers';
import abi from 'ethereumjs-abi';
import * as ethsigutils from 'eth-sig-util';
import { fromRpcSig, ECDSASignature } from 'ethereumjs-util';
import BigNumber from 'bignumber.js';
import { getDb, getMarketDb, DRE, waitForTx, notFalsyOrZeroAddress } from './misc-utils';
import {
    eContractid,
    tStringTokenSmallUnits,
    tEthereumAddress,
    OnebitPools,
    iParamsPerPool,
    iParamsPerNetwork,
    eNetwork,
    eEthereumNetwork,
    iEthereumParamsPerNetwork,
  } from './types';
import { Artifact } from 'hardhat/types';
import { verifyEtherscanContract } from './etherscan-verification';
import { ZERO_ADDRESS } from './constants';
import { IERC20Metadata__factory } from '../types/factories/dependencies/openzeppelin/contracts/IERC20Metadata__factory';

export const getFirstSigner = async () => (await getEthersSigners())[0];

export const registerContractInJsonDb = async (contractId: string, contractInstance: Contract, marketId?: string) => {
  const currentNetwork = DRE.network.name;
  const FORK = process.env.FORK;
  if (FORK || (currentNetwork !== 'hardhat' && !currentNetwork.includes('coverage'))) {
    console.log(`*** ${contractId} ***\n`);
    console.log(`Network: ${currentNetwork}`);
    console.log(`tx: ${contractInstance.deployTransaction.hash}`);
    console.log(`contract address: ${contractInstance.address}`);
    console.log(`deployer address: ${contractInstance.deployTransaction.from}`);
    console.log(`gas price: ${contractInstance.deployTransaction.gasPrice}`);
    console.log(`gas used: ${contractInstance.deployTransaction.gasLimit}`);
    console.log(`\n******`);
    console.log();
  }

  if (marketId) {
    await getMarketDb()
      .set(`${contractId}.${currentNetwork}.${marketId}`, {
        address: contractInstance.address,
        deployer: contractInstance.deployTransaction.from,
      })
      .write();
  }
  else {
    await getDb()
      .set(`${contractId}.${currentNetwork}`, {
        address: contractInstance.address,
        deployer: contractInstance.deployTransaction.from,
      })
      .write();
  }
};

export const insertContractAddressInDb = async (id: eContractid, address: tEthereumAddress, marketId?: string) => {
  if (marketId) {
    await getMarketDb()
      .set(`${id}.${DRE.network.name}.${marketId}`, {
        address,
      })
      .write();
  }
  else {
    await getDb()
      .set(`${id}.${DRE.network.name}`, {
        address,
      })
      .write();
  }
};

export const getEthersSigners = async (): Promise<Signer[]> => {
    const ethersSigners = await Promise.all(await DRE.ethers.getSigners());
    return ethersSigners;
  };

export const getEthersSignersAddresses = async (): Promise<tEthereumAddress[]> =>
  await Promise.all((await getEthersSigners()).map((signer) => signer.getAddress()));

export const withSaveAndVerify = async <ContractType extends Contract>(
    instance: ContractType,
    id: string,
    args: (string | string[])[],
    verify?: boolean,
    MarketId?: string
  ): Promise<ContractType> => {
    await waitForTx(instance.deployTransaction);
    await registerContractInJsonDb(id, instance, MarketId);
    if (verify) {
      await verifyContract(id, instance, args);
    }
    return instance;
  };

export const linkBytecode = (artifact: Artifact, libraries: any) => {
  let bytecode = artifact.bytecode;

  for (const [fileName, fileReferences] of Object.entries(artifact.linkReferences)) {
    for (const [libName, fixups] of Object.entries(fileReferences)) {
      const addr = libraries[libName];

      if (addr === undefined) {
        continue;
      }

      for (const fixup of fixups) {
        bytecode =
          bytecode.substr(0, 2 + fixup.start * 2) +
          addr.substr(2) +
          bytecode.substr(2 + (fixup.start + fixup.length) * 2);
      }
    }
  }

  return bytecode;
};

export const verifyContract = async (
    id: string,
    instance: Contract,
    args: (string | string[])[]
  ) => {
    await verifyEtherscanContract(instance.address, args);
    return instance;
  };

  export const getParamPerPool = <T>(
    { proto }: iParamsPerPool<T>,
    pool: OnebitPools
  ) => {
    switch (pool) {
      case OnebitPools.proto:
        return proto;
      default:
        return proto;
    }
  };

export const getParamPerNetwork = <T>(param: iParamsPerNetwork<T>, network: eNetwork) => {
  const { localhost, hardhat, goerli,  mainnet } =
    param as iEthereumParamsPerNetwork<T>;
  if (process.env.FORK) {
    return param[process.env.FORK as eNetwork] as T;
  }

  switch (network) {
    case eEthereumNetwork.localhost:
      return localhost;
    case eEthereumNetwork.hardhat:
      return hardhat;
    case eEthereumNetwork.goerli:
      return goerli;
    case eEthereumNetwork.mainnet:
      return mainnet;
  }
};

export const getOptionalParamAddressPerNetwork = (
  param: iParamsPerNetwork<tEthereumAddress> | undefined | null,
  network: eNetwork
) => {
  if (!param) {
    return ZERO_ADDRESS;
  }
  return getParamPerNetwork(param, network);
};

export const deployContract = async <ContractType extends Contract>(
  contractName: string,
  args: any[],
  MarketId?: string
): Promise<ContractType> => {
  const contract = (await (await DRE.ethers.getContractFactory(contractName))
    .connect(await getFirstSigner())
    .deploy(...args)) as ContractType;
  await waitForTx(contract.deployTransaction);
  await registerContractInJsonDb(<eContractid>contractName, contract, MarketId);
  return contract;
};

export const convertToString = (input: number) => new BigNumber(input).toString();

export const convertToCurrencyDecimals = async (tokenAddress: tEthereumAddress, amount: string) => {
  const token = await IERC20Metadata__factory.connect(tokenAddress, await getFirstSigner());
  let decimals = (await token.decimals()).toString();

  return ethers.utils.parseUnits(amount, decimals);
};

export const convertToCurrencyUnits = async (tokenAddress: string, amount: string) => {
  const token = await IERC20Metadata__factory.connect(tokenAddress, await getFirstSigner());
  let decimals = new BigNumber(await token.decimals());
  const currencyUnit = new BigNumber(10).pow(decimals);
  const amountInCurrencyUnits = new BigNumber(amount).div(currencyUnit);
  return amountInCurrencyUnits.toFixed();
};

export const buildPermitParams = (
  chainId: number,
  token: tEthereumAddress,
  revision: string,
  tokenName: string,
  owner: tEthereumAddress,
  spender: tEthereumAddress,
  nonce: number,
  deadline: string,
  value: tStringTokenSmallUnits
) => ({
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ],
    Permit: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  },
  primaryType: 'Permit' as const,
  domain: {
    name: tokenName,
    version: revision,
    chainId: chainId,
    verifyingContract: token,
  },
  message: {
    owner,
    spender,
    value,
    nonce,
    deadline,
  },
});

export const getSignatureFromTypedData = (
  privateKey: string,
  typedData: any // TODO: should be TypedData, from eth-sig-utils, but TS doesn't accept it
): ECDSASignature => {
  const signature = ethsigutils.signTypedData_v4(Buffer.from(privateKey.substring(2, 66), 'hex'), {
    data: typedData,
  });
  return fromRpcSig(signature);
};

export const encodeCall = (
  name: string,
  args: string[],
  values: any[],
) => {
  const methodId = abi.methodID(name, args).toString("hex");
  const params = abi.rawEncode(args, values).toString("hex");
  return "0x" + methodId + params;
};