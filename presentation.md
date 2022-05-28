# Smart contracts

## Blockchain
- [Hash](https://andersbrownworth.com/blockchain/hash)
- [Block](https://andersbrownworth.com/blockchain/block)
- [Blockchain](https://andersbrownworth.com/blockchain/blockchain)

## Ethereum
[Block explorer](https://etherscan.io)

### EVM compatible chains
[Polygon scan](https://polygonscan.com)

### Testnet
Ethereum testnets: Ropsten, Spolia, Görli, Rinkeby
[Mumbai testnet](https://mumbai.polygonscan.com)

###  Get testnet tokens
[Mumbai Faucet](https://faucet.polygon.technology)

## Smart contracts
Smart contracts are programs deployed in a blockchain that can interact independently with
the different participants of the blockchain (wallets, nodes, other smart contracts). They
are self-executing, tamper resistant, distributed, immutable (once they are deployed
they cannot be modified). The idea of smart contracts was originally proposed by Nick
Szabo.

### ERC-20
Standard for fungible tokens: [link](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)

Library with all basic functionality: [link](https://docs.openzeppelin.com/contracts/2.x/erc20)


### Deployment
How to [add Mumbai testnet](https://docs.polygon.technology/docs/develop/remix/#compile-smart-contract):
- Open Metamask and select Custom RPC from the networks dropdown
- Put in a Network name - “Matic Mumbai Testnet”
- In URL field you can add the URL as "https://rpc-mumbai.maticvigil.com"
- Enter the Chain ID: 80001
- (Optional Fields) Currency Symbol: "MATIC" and Block Explorer URL: "https://mumbai.polygonscan.com/"


## Steps
1. After everything is installed (NodeJS, VSCode, wallet extension) you can start changing your code in VSCode. Or an alternative is using an online editor: [Remix](https://remix.ethereum.org/#optimize=false&evmVersion=null&version=soljson-v0.6.6+commit.6c089d02.js&runs=200)
2. Install development dependencies: ```npm install```
3. Change your code in ```contracts/TokenContract.sol```
4. Deploy your contract: ```npm run deploy-mumbai```
5. Check the address and add it to your wallet.

## Contacts
[Javier Ortin](mailto:jortin@easyfeedbacktoken.io)

[Easy Feedback Token](https://easyfeedbacktoken.io/en/)