import { config as dotEnvConfig } from "dotenv";
import { resolve } from "path";

dotEnvConfig({path: resolve(__dirname, "../.env")});

if (!process.env.NFT_STORAGE_KEY) {
    throw new Error("Please set your NFT_STORAGE_KEY in a .env file");
}

export const nftStorageKey: string = process.env.NFT_STORAGE_KEY;