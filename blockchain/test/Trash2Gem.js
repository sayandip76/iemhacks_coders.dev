const {expect}=require('chai');
const { ethers } = require('hardhat');
const BigNumber = require('bignumber.js');


const convert_to_big=(value)=>{
  return ethers.parseUnits(value.toString(), "ether");
}


describe("Interacting Smart Contract",()=>{
   let owner,acc1,acc2,acc={};
   let contract,provider,_contract;


   beforeEach(async()=>{

     [owner,acc1,acc2,...acc]=await ethers.getSigners();
     _contract=await ethers.getContractFactory("Trash2Gem");
      provider = await ethers.getDefaultProvider();

     contract=await _contract.deploy({value:convert_to_big(25)});

     const create_nft_1=await contract.createNFT("http://giftoken_1","Best Contributor_1");
     const create_nft_2=await contract.createNFT("http://giftoken_2","Best Contributor_2");
     const create_nft_3=await contract.createNFT("http://giftoken_3","Best Contributor_3");

     console.log(contract.target)

     const create_category_1=await contract.addWasteType("Plastics",convert_to_big(0.002));
     const create_category_2=await contract.addWasteType("Paper Items",convert_to_big(0.0002));
     const create_category_3=await contract.addWasteType("Pipes",convert_to_big(0.001));

     const tot=await contract.connect(acc1).totalWaste();
     console.log(await ethers.formatEther(tot));
     //expect(await contract.connect(acc1).totalWasteCategories).to.equal(3);
    
   })
   
   describe("User Section",async()=>{

     it("Add a user",async()=>{

        const user=await contract.createUser("6348acd2e1a47ca32e79f46f");
        console.log("Before Transaction");
        let contractBalance = await ethers.provider.getBalance(contract.target);
        console.log(contractBalance);
        const addProduct=await contract.connect(acc1).sellWaste("6348acd2e1a47ca32e79f46f",1,2);
        console.log("After Transaction");
        contractBalance = await ethers.provider.getBalance(contract.target);
        console.log(contractBalance);

        const community=await contract.createCommunity("6348acd1e1a47da32e79f47f");
        const addWasteType = await contract.createWasteCategory("6348acd1e1a47da32e79f47f",2);
        const buyWaste=await contract.buyWasteItems("6348acd1e1a47da32e79f47f",1,1,{value:convert_to_big(20)});
    
        const getWasteCategories=await contract.totalWaste();
        //console.log(getWasteCategories);
        for(let i=1;i<=getWasteCategories;i++){
          const getWaste=await contract.getWasteStore(i);
          console.log(Math.pow(10,18)*ethers.formatEther(getWaste.id));
          console.log(getWaste.wasteType);
          console.log(Math.pow(10,18)*ethers.formatEther(getWaste.amountPresent));
          console.log(Math.pow(10,18)*ethers.formatEther(getWaste.amountRecycled));
          console.log(ethers.formatEther(getWaste.amtPerUint));
        }
        

        
     });
   }) 

   /* describe("Store Section",()=>{
     it("Create NFT",async()=>{
        const nft=await contract.createNFT("http://localhost:8080/1","Super Contributor");
        console.log(nft);
        contract.on("CreateNFT", (to,amount,from)=>{
        console.log("///////////",to,from,amount);
      }) 
    })
   }) */
   
})