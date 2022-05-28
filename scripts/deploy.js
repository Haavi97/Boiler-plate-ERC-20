require("dotenv").config();
require("web3");

async function main(network) {
  console.log("network: ", network.name);

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Deployer's address: `, deployerAddress);

  let TOKENAddress = process.env.EASYF_MAINNET;
  let tokenContract;

  if (deployer) {
    const TokenContract = await ethers.getContractFactory("TokenContract");
    tokenContract = await TokenContract.deploy();
    await tokenContract.deployed();

    console.log("TokenContract deployed at", tokenContract.address);
  }

  if (tokenContract.address) {
    await tokenContract.mint(
      deployerAddress,
      web3.utils.toWei("10000", "ether")
    );
  }
}

main(network)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
