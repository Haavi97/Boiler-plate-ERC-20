const { expect } = require("hardhat");

const TokenContract = artifacts.require("TokenContract");

contract("TokenContract", (accounts) => {
  const [deployer] = accounts;

  it("Should deploy minting 1 token to the deployer", async function () {
    let tokenContract = await TokenContract.new();
    assert.equal(
      await tokenContract.balanceOf(deployer),
      web3.utils.toWei("1", "ether")
    );
  });
});
