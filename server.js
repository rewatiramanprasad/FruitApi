const { getCipherInfo } = require("crypto");
const express=require("express");
const app=express();
const data=require("./config/config.json");




app.get("/",(req,res)=>{
    
    res.send("yeah its working.......");
    
    
});






app.listen(data.port,()=>{
    console.log("https://"+data["host"]+":"+data["port"]+" is running");
})