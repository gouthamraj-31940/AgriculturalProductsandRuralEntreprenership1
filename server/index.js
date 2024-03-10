const express = require('express')
const cors = require('cors')
const {MongoClient}=require('mongodb')
const bcrypt=require('bcrypt')
const app = new express();
 app.use(express.json());
//any thord part application can be served, if the cors is enabled
app.use(cors());
const client=new MongoClient('mongodb+srv://admin1:admin1@atlascluster.dehwmkp.mongodb.net/?retryWrites=true&w=majority')
client.connect();
const db=client.db("skill")
const col=db.collection("user")
//from browser, the default url triggering is get method
//localhost:8081/home
//1st parameter is address and second parameter is service function
app.get('/home', (req, res) => {
res.send("It is a Home Page-new home page-new home page2 3")
})
app.post('/insert',async (req,res)=>{
    req.body.password=await bcrypt.hash(req.body.password,5)//pw encrypted 
    console.log(req.body);
    col.insertOne(req.body);
    res.send("data received")
})
app.post('/check',async(req,res)=>{
    console.log(req.body)
    var result =await col.findOne({"name":req.body.un})
    if(result!=null){
        if(await bcrypt.compare(req.body.pw,result.password)){
            res.send(result);
        }
        else{
            res.send("fail")
        }
    }
    else{
        res.send("fail")
    }
})
app.listen(8081);
//client is running in port 3000
console.log("Server Running");