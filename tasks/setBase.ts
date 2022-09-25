import {task, types} from "hardhat/config";
import {nftAddress} from "../config";
import {MyToken, MyToken__factory} from "../typechain-types";

task("setBase", "Sets the base URI")
    .addParam("base", "the base uri", "", types.string)
    .setAction(async (args, hre) => {
        const deployer = (await hre.ethers.getSigners())[0];

        const addr = nftAddress;
        if (!addr) return;

        const nft = MyToken__factory.getContract(addr, MyToken__factory.createInterface(), deployer) as MyToken;

        const base: string = args.base!!;

        const tx = await nft.setBase(base);

        await tx.wait(1);

        console.log(`Set new base uri to ${base}`);
    });