// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

import "./SimpleStorage.sol";

//Inheritance

contract ExtraStorage is SimpleStorage {
    function store(uint256 _favoriteNumber) public override {
        favouriteNumber = _favoriteNumber + 10;
    }
}
