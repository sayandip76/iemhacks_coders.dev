const mongoose=require('mongoose');
const express=require('express');
const jwt = require('jsonwebtoken');

const router=express.Router();

const {visitorModel}=require('../models/visitorsModel');
const secretToken="Your Secret Key";

async function userExists(req) {
    //console.log(req.email);
    const checkPresence=await visitorModel.findOne({email:req.email});
    //console.log("///////////",checkPresence);
    if(checkPresence!=null){
         return checkPresence;
    }
    return false;
}
async function authorize(req){
    const checkPresence=await visitorModel.findOne({email:req.email});
    if(checkPresence.password==req.password){
        return checkPresence;
    }
    return false
}
router.post('/signup',async(req,res)=>{
   try{
       const checkExist=await userExists(req.body);
       //console.log(checkExist);
       if(!checkExist){
         const createVisitor=new visitorModel({
            email:req.body.email,password:req.body.password
         });
         await createVisitor.save();
         const createToken=jwt.sign({
            data: {email:req.body.email,password:req.body.password}
          }, secretToken, { expiresIn: '1h' });
         return res.status(200).json({message:true,data:createVisitor,token:createToken});
       }
       return res.status(403).json({message:false,data:"User Already Exists"});

   }
   catch(err){
      console.log(err);
      return res.status(500).json({message:false});
   }
})
router.post('/authorize',async(req,res)=>{
    //console.log(req.body.email);
    try{
        const checkExist=await userExists(req.body);
        if(checkExist==false){

            const createVisitor=new visitorModel({
                email:req.body.email
            });
            await createVisitor.save();
            return res.status(200).json({message:true,data:createVisitor});
            
        }    

        return res.status(200).json({message:true,data:checkExist});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false});
     }
})
router.get('verifyToken',async(req,res)=>{
    try{
        const token=req.headers.authorization?.split('')[1];
        if (!token) {
            return res.status(401).json({ message: false });
        }
        const decoded = jwt.verify(token, secretToken);
        

        if(decoded){
            const getDetails=userExists({email:decoded.email});
            if(getDetails){
                return res.status(200).json({message:true,data:getDetails});
            }
        }
        return res.status(401).json({message:false});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:false});
    }
})
module.exports=router;
