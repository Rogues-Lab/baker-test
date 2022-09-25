import {task} from "hardhat/config";
import {Signer} from "ethers";
import {nftAddress} from "../config";
import {HardhatRuntimeEnvironment} from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");

async function main() {
    const deployer: Signer = (await hre.ethers.getSigners())[0];
    const deployerAddress = await deployer.getAddress();

    const contractFactory = await hre.ethers.getContractFactory("MyToken", deployer);

    const deployed = await contractFactory.attach(nftAddress);

    await deployed.safeMint(deployerAddress);

    console.log("Minted to", deployerAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
