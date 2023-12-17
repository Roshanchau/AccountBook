const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const tableSchema=new Schema(
    {
        items:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        remarks:{
            type:String,
        },
        date:{
            type:String,
            required:true,
        },
        serial:{
            type:Number,
            required: true
        },
        monthkey:{
            type:Number,
            required:true,
        },
        customer_id:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"customer"
        }
    }
)


module.exports=mongoose.model("table",tableSchema)