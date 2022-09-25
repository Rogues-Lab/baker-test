import {ethers} from "hardhat";

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy();

  const deployed = await token.deployed();

  console.log("Token deployed:");
  console.log(deployed.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
