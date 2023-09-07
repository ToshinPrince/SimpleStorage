// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

contract SimpleStorage {
    //creating variable
    uint256 favouriteNumber;

    struct People {
        uint256 favouriteNumber;
        string name;
    }

    //creating mapping
    mapping(string => uint256) public nameToFavouriteNumber;

    //creating array
    People[] public people;

    //function assigning value to the variable
    function store(uint256 _favouriteNumber) public {
        favouriteNumber = _favouriteNumber;
    }

    // function to retrive the assigned value of favouriteNumber
    function getFavouriteNumber() public view returns (uint256) {
        return favouriteNumber;
    }

    function addPerson(uint256 _favouriteNumber, string memory _name) public {
        people.push(People(_favouriteNumber, _name));

        nameToFavouriteNumber[_name] = _favouriteNumber;
    }
}
