const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

},{timestamps:true}
);

module.exports=mongoose.model("User",userSchema)