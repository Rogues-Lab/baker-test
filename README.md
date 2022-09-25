# Sample Metabaker Hardhat project

This project demonstrates a basic Metabaker Hardhat use case. It comes with a sample contract, and an example config.

It's assumed that you have a .env file (not checked in) with your nft.storage API key, you can get one at :
```
NFT_STORAGE_KEY=something here
```

This repo also assumes you have a local copy of the [hardhat-metabaker](https://github.com/Rogues-Lab/hardhat-metabaker) project in a directory next to this one, i.e.
```
./baker-test/
./hardhat-metabaker/
```

Try running some of the following tasks:

```shell
npx hardhat node
npx hardhat run scripts/deploy.ts
npx hardhat run scripts/mint.ts
npx hardhat publishMetaToNFTStorage --contract MyToken
```
