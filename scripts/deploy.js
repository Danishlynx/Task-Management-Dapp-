const { ethers } = require("hardhat");

const main = async () => {
  const contractFactory = await ethers.getContractFactory("TaskContract");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Contract deployed to :", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

//Contract deployed to : 0xD79eDDc72848cB4B5E7AA6b5E678c6C087596b05
