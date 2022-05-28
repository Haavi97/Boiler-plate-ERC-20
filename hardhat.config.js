require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const accounts = {
  mnemonic:
    process.env.MNEMONIC ||
    "test test test test test test test test test test test junk",
};

module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    compilers: [
      {
        version: "0.8.12",
      },
    ],
    coverage: {
      url: "http://localhost:8555",
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts,
      chainId: 80001,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1,
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts,
      chainId: 137,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      default: 1,
    },
  },
};
