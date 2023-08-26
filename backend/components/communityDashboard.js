const mongoose=require('mongoose');
const express=require('express');
const { communityModel } = require('../models/communityModel');
const { visitorModel } = require('../models/visitorsModel');
const { productModel } = require('../models/otherModel');

const router=express.Router();

router.post('/createCommunity',async(req,res)=>{
    //console.log(req.body)
    const {_id,communityName,description,walletAddress,latitude,longitude,image}=req.body;

    try{
      const createCommunity=new communityModel({_id,communityName,description,walletAddress,location:{latitude:latitude,longitude:longitude},image:image});
      await createCommunity.save();
      const updateVistor=await visitorModel.findById(_id);
      updateVistor.visitorDesig="Community";
      updateVistor.isProfileCreated=true;
      updateVistor.save();
      return res.status(200).json({message:true,data:{createCommunity,updateVistor}})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.post('/:communityName',async(req,res)=>{
    try{
      const getCommunity=await communityModel.findById(req.body.id).populate('products','wasteType');
      console.log(getCommunity);
      return res.status(200).json({message:true,data:getCommunity});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.get('/communities',async(req,res)=>{
    console.log("Enter");
    try{
      const getCommunity=await communityModel.find();
      console.log("????????///",getCommunity);
      return res.status(200).json({message:true,data:getCommunity});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.put('/createProduct',async(req,res)=>{
    console.log(req.body);
    const {description,image,price,owner}=req.body;
    try{
     const createProduct=new productModel({description,image,owner,price});
     await createProduct.save();
     const updateCommunity=await communityModel.findById(owner);
     updateCommunity.products.push(_id);
     await updateCommunity.save();
     return res.status(200).json({message:true,data:createProduct});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
router.put('/buyWaste',async(req,res)=>{
    const {wasteId,amountBought,communityId}=req.body;
    try{
        const getCommunity=await communityModel.findById(communityId);
        
        let i;
        for(i=0;i<getCommunity.wasteType.length;i++){
           if(getCommunity.wasteType[i]._id==wasteId){
             getCommunity.wasteType[i].amountBought+=amountBought;
           }
        }
        if(i==getCommunity.wasteType.length-1){
            getCommunity.wasteType[wasteId]+=amountBought;
        }
        await getCommunity.save();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message});
    }
})
module.exports=router;