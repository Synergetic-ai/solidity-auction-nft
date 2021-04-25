pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

// import "@openzeppelin/contracts/access/AccessControl.sol";

contract ItemToken is ERC721PresetMinterPauserAutoId {
    // bytes32 public constant override MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor()
        ERC721PresetMinterPauserAutoId("ItemToken", "IT", "http://localhost/")
    {}

    function award(address to) public  {
        // Check that the calling account has the minter role
        // require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        super.mint(to);
    }
}
