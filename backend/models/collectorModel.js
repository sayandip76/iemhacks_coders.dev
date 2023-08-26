const mongoose=require('mongoose');

require('../connectServer');

const collectorSchema=new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'VisitorModel'},
    
    collectorName:{type:String,required:true},
    collectorAddress:{type:String,required:true},
    walletAddress:{type:String},
    boughtProducts:{type:[
        {type:Number,ref:'ProductModel'}
    ]},
    
})
const collectorModel=new mongoose.model('CollectorModel',collectorSchema);

module.exports={
    collectorModel
};