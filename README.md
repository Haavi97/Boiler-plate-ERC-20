# Boiler-plate-ERC-20
Boiler plate code for launching an ERC-20 token. Created for the WN3 event.

# Introduction
During the smart contract workshop we will learn some basic concepts and things that can be done. We will deploy a smart contract and interact with it. For that you can install some components before coming to the workshop:

## Wallet
For interacting with smart contracts (deploying, calling functions...) you will need to have a wallet. 
For that here are 2 of the most popular ones. Install one of your choice:
### Metamask
[Install Metamask wallet](https://metamask.io/download/)

### Coinbase:
[Install Coinbase wallet](https://www.coinbase.com/wallet/getting-started-extension)

## Software
Here there is a list of components you will need: 
- [Install Node JS](https://nodejs.org/en/download/)
- [Install Visual Studio Code (recommended IDE)](https://code.visualstudio.com/download)

## Steps
1. After everything is installed (NodeJS, VSCode, wallet extension) you can start changing your code in VSCode. Or an alternative is using an online editor: [Remix](https://remix.ethereum.org/#optimize=false&evmVersion=null&version=soljson-v0.6.6+commit.6c089d02.js&runs=200)
2. Install development dependencies: ```npm install```
3. Change your code in ```contracts/TokenContract.sol```
4. Deploy your contract: ```npm run deploy-mumbai```
5. Check the address and add it to your wallet.