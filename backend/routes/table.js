const express=require("express")
const router=express.Router()

const {getTable ,createTable}=require("../controllers/tableController")


//get all the table
router.get("/:id" , getTable);

// create table
router.post("/:id" , createTable);


module.exports=router;