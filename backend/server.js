require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customer");
const shopRoutes = require("./routes/shop");
const tableRoutes=require("./routes/table")
const app=express();

//routes


//middleware
app.use(express.json()); //we use it for req.body

app.use((req, res, next) => {
  console.log(req.path, req.method); //this is middleware
  next();
});

//routes
app.use("/api/customers", customerRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/table",tableRoutes)

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
