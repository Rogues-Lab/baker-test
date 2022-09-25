import {task} from "hardhat/config";
import {Signer} from "ethers";
import {nftAddress} from "../config";


task("mint", async (_taskArgs, hre) => {
    const deployer: Signer = (await hre.ethers.getSigners())[0];
    const deployerAddress = await deployer.getAddress();

    const contractFactory = await hre.ethers.getContractFactory("MyToken", deployer);

    const deployed = await contractFactory.attach(nftAddress);

    await deployed.safeMint(deployerAddress);

    console.log("Minted to", deployerAddress);
})