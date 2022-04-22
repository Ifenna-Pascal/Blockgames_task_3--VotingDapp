const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("getAllCandidates", function () {
  it("Should return names and ids of candidates", async function () {
    const SimpleElection = await ethers.getContractFactory("SimpleElection");
    const simpleElection = await SimpleElection.deploy();
    await simpleElection.deployed();

  //check that a candidate has been added
    const tx = await simpleElection.addCandidate("Harr")

    //get the candidates
    const candidate = await simpleElection.getAllCandidates();


    expect(await candidate[0][0]).to.equal("Harr");
  });
});

describe("compile Result", function () {
  it("Should return names and votecounts", async function () {
    //deploy contract
    const SimpleElection = await ethers.getContractFactory("SimpleElection");
    const simpleElection = await SimpleElection.deploy();
    await simpleElection.deployed();

    //create a candidate
    //cast vote for the candidate
    await simpleElection.addCandidate("Harry")
    await simpleElection.vote(0);
    const result = await simpleElection.compileResult();

    //test for the values
    expect(await result[0][0]).to.equal("Harry");
    expect(await result[1][0]).to.equal("1");
  });
});

describe("vote", function () {
  it("inrement candidates vote by 1", async function () {
    //deploy contract
    const SimpleElection = await ethers.getContractFactory("SimpleElection");
    const simpleElection = await SimpleElection.deploy();
    await simpleElection.deployed();

    //cast vote with no candidtae registered
    await simpleElection.addCandidate("Harry")

    await simpleElection.vote(0);

    const result = await simpleElection.compileResult();
    

    //test for the values
    expect(await result[1][0]).to.be.not.undefined;
    expect(await result[1][0]).to.be.not.null;
    expect(await result[1][0].toNumber()).to.equal(1);
  });
});