require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");

const app=express();

//routes


//connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT , ()=>{
            console.log("connnected to db & listening to port" , process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
