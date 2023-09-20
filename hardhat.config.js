require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
//
require("hardhat-gas-reporter"); // This plugin is used to get gas information.
// to use solidity-coverage run yarn hardhat coverage
require("solidity-coverage"); //This plugin given information about which line of code is covered in test and which line is not.

/** @type import('hardhat/config').HardhatUserConfig */

// this is ||(or) and we are using it so if somehow RPC_URL are not available the code dosent break
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "https://eth-goreli.com/example";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "0xkey";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "0xkey";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: this will be atomatically handeled my hardhat,
      chainId: 31337,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    //in Order to get currency we need CoinMarketCap API
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    //You can mention any EVM supporting blockchian token to get gas related to that blockchain.
    //you can check more in hardhat-gas-reporter npm docs.
    // token: "MATIC",
  },
};

// // This is package.json default file for reference
// {
//   "name": "simple-storage-resolve",
//   "version": "1.0.0",
//   "license": "MIT",
//   "devDependencies": {
//     "@nomicfoundation/hardhat-chai-matchers": "^2.0.0",
//     "@nomicfoundation/hardhat-ethers": "^3.0.0",
//     "@nomicfoundation/hardhat-network-helpers": "^1.0.0",
//     "@nomicfoundation/hardhat-toolbox": "^3.0.0",
//     "@nomicfoundation/hardhat-verify": "^1.0.0",
//     "@typechain/ethers-v6": "^0.4.0",
//     "@typechain/hardhat": "^8.0.0",
//     "chai": "^4.2.0",
//     "ethers": "^6.4.0",
//     "hardhat": "^2.17.3",
//     "hardhat-gas-reporter": "^1.0.8",
//     "solidity-coverage": "^0.8.0",
//     "typechain": "^8.1.0"
//   }
// }
