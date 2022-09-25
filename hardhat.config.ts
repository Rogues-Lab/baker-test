import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-metabaker";
import { nftStorageKey } from "./config";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  metabaker: {
    nftStorageKey,
    imageExtension: "jpg",
    baseMetadataPath: "./metadata"
  }
};

export default config;
