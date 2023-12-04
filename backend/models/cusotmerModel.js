const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
  user_id:{
    type: String,
    require:true
  },
  table:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "table",

  }
},
{timestamps:true}
);

module.exports=mongoose.model("cusotmer" , customerSchema);