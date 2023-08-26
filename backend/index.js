const express=require('express');
const http=require('http');

const cors=require('cors');

const app= express(); 
const server=http.createServer(app);

app.use(express.json());
app.use(cors(
  {origin:true,credentials:true}
));

app.post("/",(req,res)=>{
    return res.status(200).json({message:true});
})

app.use('/',require('./components/landingSection'));
app.use('/collector',require('./components/collectorDashboard'));
app.use('/marketplace',require('./components/marketplace'));
app.use('/community',require('./components/communityDashboard'));
app.use('/wasteStore',require('./components/wasteDashboard'));

server.listen(8080,()=>{
    console.log("Server Started")
})


