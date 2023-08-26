const mongoose = require('mongoose');

require('../connectServer');

const communitySchema=new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'VisitorModel'},
    communityName:{type:String,required:true},
    description:{type:String,required:true},
    walletAddress:{type:String},
    location:{
        type:{
            latitude:{type:Number,required:true},
            longitude:{type:Number,required:true}
        }
    },
    image:{
        type:String,required:true
    },
    products:{type:[
        {type:Number,ref:'ProductModel'}
    ]},
    wasteType:{
        type:[
            {
                _id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'WasteModel'},
                amountBought:{type:Number,default:0}
            }
        ]
    }
    
})
const communityModel=new mongoose.model('CommunityModel',communitySchema);
module.exports = {communityModel};