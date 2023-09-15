// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, run, network } = require("hardhat");

async function main() {
  //Creating
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  //Deploying Contract
  console.log("Deploying Contract");
  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();
  console.log(`deploying contract at:${simpleStorage.address}\n`);

  //runing verify funcition, only on live network, in our case sepolia, not in hardhat network.
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    //we are waiting 6 block confermation so the transaction is properly registered on the network, to be recognized
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }
}

//Programmatically Verifying
//Using verify function with verify task
async function verify(contractAddress, args) {
  console.log("Verifying Contract....");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
