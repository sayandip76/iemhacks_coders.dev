const express=require('express');
const router=express.Router();

const {wasteModel}=require('../models/wasteModel');

router.get('/wastes',async(req,res)=>{
    try{
      const wasteItems=await wasteModel.find();
      return res.status(200).json({message:true,data:wasteItems});
    }
    catch(err){
        return res.status(500).json({message:false,data:err.message});
    }
})
module.exports =router;