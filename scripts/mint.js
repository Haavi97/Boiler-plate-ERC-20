require("dotenv").config();
require("web3");

async function main(network) {
  console.log("network: ", network.name);

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Deployer's address: `, deployerAddress);

  const TokenContract = await ethers.getContractFactory("TokenContract");

  const tokenContract = await TokenContract.attach(
    "0x0" // The deployed contract address
  );
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
