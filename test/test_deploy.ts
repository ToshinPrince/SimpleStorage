import { ethers } from "hardhat";
import { expect, assert } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  let SimpleStorage: SimpleStorage__factory;
  let simpleStorage: SimpleStorage;

  beforeEach(async () => {
    SimpleStorage = (await ethers.getContractFactory(
      "SimpleStorage"
    )) as SimpleStorage__factory;
    simpleStorage = await SimpleStorage.deploy();
  });

  it("Should start with Favorite number 0", async function () {
    const currentNumber = await simpleStorage.retrieveFN();
    const expectedNumber = "0";
    // assert.equal(currentNumber.toString(), expectedNumber);
    expect(currentNumber.toString()).to.equal(expectedNumber);
  });

  it("Should update, when called store", async () => {
    const expectedNumber = "8";
    const transactionResponse = await simpleStorage.store(expectedNumber);
    await transactionResponse.wait();

    const currentNumber = await simpleStorage.retrieveFN();

    // expect(currentNumber.toString()).to.equal(expectedNumber);
    assert.equal(currentNumber.toString(), expectedNumber);
  });
});
