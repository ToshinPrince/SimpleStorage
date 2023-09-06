//importS
const {ethers} = require("hardhat");

//async Main

async function main() {

  const SimpleStorage = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  // Deploy the contract
  const simpleStorage = await SimpleStorage.deploy()
  await simpleStorage.deployed()
  console.log(`Deployed contract to: ${simpleStorage.address}`)
//   // const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
//   // console.log("Deploying Contract...");

// // Deploy the contract
// // const simpleStorage = await SimpleStorage.deploy();

// // Wait for the deployment transaction to be mined
// await simpleStorage.deployTransaction.wait(); // This is the correct usage

  //Deploy the contract and wait for the deployed transation to be mined
//  const deploymentTransaction = await SimpleStorage.deploy();
//  await deploymentTransaction.wait();

 //Getting the deployed contract
  // const simpleStorage = await ethers.getContractAt("SimpleStorage", deploymentTransaction.contractAddress);
  

  console.log(`Deployed Contract to: ${simpleStorage.address}`);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
