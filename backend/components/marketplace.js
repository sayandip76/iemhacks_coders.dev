const mongoose=require('mongoose');
const express=require('express');

const router=express.Router();
const {productModel}=require('../models/otherModel');

router.get('/products',async(req,res)=>{
    try{
      const displayProducts=await productModel.find();
      return res.status(200).json({message:true,data:displayProducts});
    }
    catch(err){
        return res.status(500).json({message:false,data: err.message});
    }
})


module.exports=router;