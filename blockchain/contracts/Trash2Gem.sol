// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;
    
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Trash2Gem is ERC721URIStorage,Ownable{

    //store collection and structures

        uint8 public totalMintedNfts;
        event minting(uint8 nftId,string ipfs,string message);

        uint8 public totalWasteCategories;
        mapping(uint8=> WasteCategory) public WasteCategories;
        event WasteType(uint8 totalWasteCategories, string wasteType,uint8 amountRecycled,uint8 amountPresent);

        uint8 public totalCreatedNfts;
        mapping(uint8=>NFT) public NFTs;
        event CreateNFT(uint8 totalCreatedNfts,string ipfs,string awardedFor);

    //user collection and structure
        
        mapping(string =>UserStructure) public Users;
        event CreateUser(string id,string message);

        event AddWasteItems(string wasteType,uint8 amount,uint amtReceived);
        event BuyItem(string productName,uint8 price,string seller,string buyer);
    
    //communities collection and structure

        mapping(string=>CommunityStructure) public Communities; 
        event CreateCommunity(string id,string message);

        mapping(string=>mapping (uint8=>WasteCategory)) public CommunityWasteCategories;
        event ImportWasteItem(uint8 id,uint price,string wasteType,uint8 amount);

        event DonateAmt(address sender,uint amt,address community);

    //creation of marketplace

        uint8 public totalProducts;
        mapping(uint8=>Item) public marketItems;
        event ProductCreation(string productName,uint8 price,string buyer);

    //other structure and events

        struct NFT{
            uint8  id;string awardedFor;string ipfs;
        }
        struct Item{
            uint8 id;string owner;uint8 price;Production productState;
        }
        enum Production{
                Sold,NotSold
        }
        struct WasteCategory{
            uint8 id;string wasteType;uint amountPresent;uint amountRecycled;uint amtPerUint;
        }
        struct UserStructure{
            string id;bool isExists;uint8[] boughtItems;uint8 amountSold;uint8[] UserNfts;
        }
        struct CommunityStructure{
            string id;bool isExists;address ownerAddress; uint8 totalCreatedProducts;
            uint8[] CreatedProducts;uint8[] CommunityNfts;uint8[] WasteIds;
        }

        constructor() payable ERC721("Trash2Gem","T2G"){
            
        }
        
        function mintNFT(uint8 nftId) internal returns(uint8){
            totalMintedNfts++;
            NFT storage nft=NFTs[nftId];
            _mint(msg.sender,totalMintedNfts);
            _setTokenURI(totalMintedNfts,nft.ipfs);

            emit minting(totalMintedNfts,nft.ipfs,"New NFT created");
            return totalMintedNfts;
        }
    //function executed by owner or store warehouse

        function addWasteType(string memory wasteType,uint8 amtPerUint)external onlyOwner {
            totalWasteCategories++;
            WasteCategories[totalWasteCategories]=WasteCategory(totalWasteCategories,wasteType,0,0,amtPerUint);
            emit WasteType(totalWasteCategories,wasteType,0,amtPerUint);
        }

        function createNFT(string memory ipfs,string memory awardedFor)external onlyOwner{
            totalCreatedNfts++;
            NFTs[totalCreatedNfts]=NFT(totalCreatedNfts,ipfs,awardedFor);
            emit CreateNFT(totalCreatedNfts,awardedFor,ipfs);
        }

    //function to be displayed in store

        function totalWaste()public view returns(uint8){
             return totalWasteCategories;
        } 
        function getWasteCategory(uint8 wasteId)public view returns(WasteCategory memory){
            return WasteCategories[wasteId];
        }
               

    //function executed for user

        function createUser(string memory id)external{
            require(!Users[id].isExists,"User already Exists");

            UserStructure storage User=Users[id];
            User.id=id;
            User.isExists=true;
            emit CreateUser(id,"User created with this id");
        }
        function sellWaste(string memory id,uint8 wasteId,uint8 wasteAmt)external{

            UserStructure storage User=Users[id];
            WasteCategory storage Waste=WasteCategories[wasteId];
            Waste.amountPresent+=wasteAmt;
            payable(msg.sender).transfer(wasteAmt*(Waste.amtPerUint));
            User.amountSold+=wasteAmt;
            emit AddWasteItems(Waste.wasteType,wasteAmt,wasteAmt*(Waste.amtPerUint));

        }
        function buyProduct(string memory id,string memory communityId,uint8 productId)external payable{
            UserStructure storage User=Users[id];
            CommunityStructure storage community=Communities[communityId];
            Item storage productItem=marketItems[productId];
            uint8 productPrice=productItem.price;
            require(msg.value>=productPrice,"Please send the desired amount");
            payable(community.ownerAddress).transfer(productPrice);
            productItem.owner=id;
            productItem.productState=Production.Sold;
            User.boughtItems.push(productId);
        }
        function getCurrentUser(string memory id)external view returns(UserStructure memory){
            return Users[id];
        }

    //function executed by community

        function createCommunity(string memory id)external{
                require(!Communities[id].isExists,"Community already Exists");
                CommunityStructure storage community=Communities[id];
                community.id=id;
                community.isExists=true;
                community.ownerAddress=msg.sender;
                emit CreateCommunity(id,"Community Created");
        }
       
        function buyWasteItems(string memory id,uint8 wasteItemId,uint8 amtNeeded)external payable{

                require(msg.value>=(amtNeeded*WasteCategories[wasteItemId].amtPerUint),"Provide sufficient fees");
                CommunityStructure storage community=Communities[id];
                WasteCategories[wasteItemId].amountPresent-=amtNeeded;   
                WasteCategories[wasteItemId].amountRecycled+=amtNeeded; 

                if(CommunityWasteCategories[id][wasteItemId].id==0){
                    community.WasteIds.push(wasteItemId);
                    CommunityWasteCategories[id][wasteItemId]=WasteCategory(wasteItemId,WasteCategories[wasteItemId].wasteType,0,0,WasteCategories[wasteItemId].amtPerUint);
                }
                CommunityWasteCategories[id][wasteItemId].amountPresent+=amtNeeded;   
                emit ImportWasteItem(wasteItemId,msg.value,WasteCategories[wasteItemId].wasteType,amtNeeded);         
        }

        function createProduct(string memory id,uint8 price,string memory productName )external{

                CommunityStructure storage community=Communities[id];
                community.totalCreatedProducts+=1;
                totalProducts+=1;
                marketItems[totalProducts]=Item(totalProducts,id,price,Production.NotSold);
                community.CreatedProducts.push(totalProducts);
                
                emit ProductCreation(productName,price,id);
                                
        }
        function getWasteCommunity(string memory communityId,uint8 wasteId)public view returns(WasteCategory memory){
            return CommunityWasteCategories[communityId][wasteId];
        }
        function getCurrentCommunity(string memory id)external view returns(CommunityStructure memory){
            return Communities[id];
        }

    //donate fund for community
        function contributeFund(string memory id)external payable {
            require(msg.value>=0,"Donate minimal amount");
            CommunityStructure storage community=Communities[id];
            payable(community.ownerAddress).transfer(msg.value);
            emit DonateAmt(msg.sender,msg.value,community.ownerAddress);
        }

}
      

