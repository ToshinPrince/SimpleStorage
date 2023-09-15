require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
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
