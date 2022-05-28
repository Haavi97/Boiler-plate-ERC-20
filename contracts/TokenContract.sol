// SPDX-License-Identifier: MIT

pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenContract is ERC20Capped, Ownable {
    // We are specifying the token name and symbol in the constructors using the openzeppelin library
    // We are also limiting its maximum supply
    constructor ()
    ERC20("TokenName", "TKN")
    ERC20Capped(1970 * 1 ether)
    {
        // Mint 1 Token of total supply to the deployer
        mint(msg.sender, (1 * 1 ether));
    }

    event Burned(address indexed burner, uint256 burnAmount);

    event Minted(
        address indexed minter,
        address indexed receiver,
        uint256 mintAmount
    );

    function mint(address _to, uint256 _amount) public onlyOwner {
        require(_amount > 0, "ERC20: Cannot mint 0 tokens");
        _mint(_to, _amount);
        emit Minted(owner(), _to, _amount);
    }

    function burn(uint256 _amount) public {
        require(_amount > 0, "ERC20: Cannot burn 0 tokens");
        _burn(msg.sender, _amount);
        emit Burned(msg.sender, _amount);
    }
}
