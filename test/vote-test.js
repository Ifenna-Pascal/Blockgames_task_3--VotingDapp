// const { expect } = require("chai");

// describe("SimpleElection contract", () => {
//     let SimpleElection, election, owner, addr1, addr2;

//     beforeEach(async () => {
//         SimpleElection = await ethers.getContractFactory("SimpleElection");
//         election = await SimpleElection.deploy();
//         [owner] = await ethers.getSigners();
//     });

//     describe("Deployment", () => {
//         it("Should set the right chairperson", async () => {  
//             expect(await election.owner()).to.equal(owner.address);
//         });
//     });
// });
