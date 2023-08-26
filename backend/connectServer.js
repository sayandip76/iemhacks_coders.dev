const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_ATLAS_URL,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Successful connection....");
}).catch((err)=>{
    console.log(err);
})
