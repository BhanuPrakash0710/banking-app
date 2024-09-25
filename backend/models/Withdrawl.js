const mongoose=require('mongoose')
const User=require("./User")

const withdrawlSchema=new mongoose.Schema({
    withdrawer:{
    type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Withdrawl",withdrawlSchema)