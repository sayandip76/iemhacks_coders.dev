const mongoose=require('mongoose');
const express=require('express');
const { collectorModel } = require('../models/collectorModel');
const { visitorModel } = require('../models/visitorsModel');
const {productModel}=require('../models/otherModel');
const {wasteModel}=require('../models/wasteModel');


const router=express.Router();

router.post('/createProfile',async(req,res)=>{
    console.log(req.body);
    const {_id,collectorName,collectorAddress,walletAddress}=req.body;
    try{
      const createCollector=new collectorModel({_id,collectorName,collectorAddress,walletAddress});
      await createCollector.save();

      const updateVistor=await visitorModel.findById(_id);
      updateVistor.visitorDesig="Collector";
      updateVistor.isProfileCreated=true;
      updateVistor.save();
      return res.status(200).json({message:true,data:{createCollector,updateVistor}})
    }
    catch(err){
        console.log(err);
        return res.status(404).json({message:false,data:err.message});
    } 
})
router.put('/:collectorName',async(req,res)=>{
    console.log("]]]]]]]]]]]]]]",req.body)
    const {id}=req.body;
    try{
      const getCollector=await collectorModel.findById(id);
      console.log(getCollector);
      return res.status(200).json({message:true,data:getCollector});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:false,data:err.message})
    }
})
router.put('/buyItem',async(req,res)=>{
    const {id,productId}=req.body;
    try{
       const getCollector=await collectorModel.findById(id).populate('boughtProducts');
       const getProduct=await productModel.findById(productId);
       getProduct.status='Sold';
       getProduct.owner=id;
       getCollector.boughtProducts.push(productId);

       await getCollector.save();
       await getProduct.save();

       console.log(getCollector,getProduct);
       return res.status(200).json({message:true,data:{getCollector,getProduct:getCollector}});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:false,data:err.message})
    }
})
router.put('/sellWaste',async(req,res)=>{
    const {wasteId,wasteAmount}=req.body;
    try{
      const sellWaste=await wasteModel.findById(wasteId);
      sellWaste.amountPresent+=wasteAmount;
      await sellWaste.save();
      return res.status(200).json({message:true,data:{getCollector,getProduct:getCollector}});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false,data:err.message})
    }
})

module.exports=router;