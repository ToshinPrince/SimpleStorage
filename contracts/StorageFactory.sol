// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

import "./SimpleStorage.sol";

contract StorageFactory {
    SimpleStorage[] public simpleStorageArry;

    function createSimpleStorageContract() public {
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArry.push(simpleStorage);
    }

    function sfStore(
        uint256 _simpleStorageIndex,
        uint256 _simpleStorageNumber
    ) public {
        //In order to intract with contracts
        //we need to have
        //1)address of the contract
        //2) ABI of the conttract

        SimpleStorage simpleStorage = simpleStorageArry[_simpleStorageIndex];
        simpleStorage.store(_simpleStorageNumber);
        // can use this single line insted of above 2 line of code
        simpleStorageArry[_simpleStorageIndex].store(_simpleStorageNumber);
    }

    function sfGet(uint256 _simpleStorageIndex) public view returns (uint256) {
        SimpleStorage simpleStorage = simpleStorageArry[_simpleStorageIndex];
        return simpleStorage.getFavouriteNumber();
        // can use this single line insted of above 2 line of code
        // return simpleStorageArry[_simpleStorageIndex].getFavouriteNumber();
    }
}
