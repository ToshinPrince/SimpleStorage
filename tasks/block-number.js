const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
  // async function blockTask(taskArgs,hre){}
  // const blockTask = async function blockTask(taskArgs,hre){}
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current Block Number ${blockNumber}`);
  }
);

module.exports = {};
