import { HardhatUserConfig } from "hardhat/config";
import path from "path";
import fs from "fs";

import {accounts} from "./test-wallets";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

const SKIP_LOAD = process.env.SKIP_LOAD === "true";

if (!SKIP_LOAD) {
  const tasksPath = path.join(__dirname, "tasks");
  if(fs.existsSync(tasksPath)){
    fs.readdirSync(tasksPath)
      .filter((pth) => pth.includes(".ts"))
      .forEach((task) => {
        require(`${tasksPath}/${task}`);
      }
    );
  }
}
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const BSC_TESTNET_PRIVATE_KEY = process.env.BSC_TESTNET_PRIVATE_KEY;
const BSC_PRIVATE_KEY = process.env.BSC_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  mocha: {
    timeout: 0,
  },
  gasReporter: {
    currency: 'ETH',
    gasPrice: 20,
    enabled: (process.env.REPORT_GAS) ? true: false,
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts: accounts.map(
        ({ secretKey, balance }: { secretKey: string; balance: string }) => ({
          privateKey: secretKey,
          balance,
        })
      ),
    },
    localhost: {
      accounts: "remote",
      url: "http://127.0.0.1:8545",
    },
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    },
    sepolia: {
      chainId: 11155111,
      url: "https://rpc.sepolia.dev",
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
    bsc_testnet: {
      chainId: 97,
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [`${BSC_TESTNET_PRIVATE_KEY}`],
    },
    bsc: {
      chainId: 56,
      url: `https://bsc-dataseed1.binance.org`,
      accounts: [`${BSC_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_KEY,
      sepolia: ETHERSCAN_KEY,
      mainnet: ETHERSCAN_KEY,
      bscTestnet: BSCSCAN_API_KEY,
      bsc: BSCSCAN_API_KEY,
    }
  },
};

export default config;
