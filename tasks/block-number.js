const { task } = require("hardhat/config");

//this is hardhat task
//task are created inside of hardhat.config.js
//but we can create task in seperate folder and import(require) it in hardhat.config.js
//Once you import this task in hardhat.config.js, you will get new task, when you run yarn hardhat -> block-number
// if you want to run the task run the script -> yarn hardhat block-number --network <networkname>
//we can do same thing using scripts

task("block-number", "Prints the current block number").setAction(
  // async function blockTask(taskArgs,hre){}
  // const blockTask = async function blockTask(taskArgs,hre){}
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current Block Number ${blockNumber}`);
  }
);

// exporting block-number task
module.exports = {};
