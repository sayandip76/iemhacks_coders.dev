// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

const toWei=(value)=>{
  return(ethers.parseUnits(value.toString(),"ether"))
}

async function main() {

   const _contract=await ethers.getContractFactory("Trash2Gem");
   const contract=await _contract.deploy(toWei(0.3));
   await contract.deployed();
   console.log("Contract address",contract.address);

      
   const create_category_1=await contract.addWasteType("Plastic Items",toWei(0.00002));
   const create_category_2=await contract.addWasteType("Paper Items",toWei(0.000001));
   const create_category_3=await contract.addWasteType("Glass Items",toWei(0.0001));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
