const mongoose=require('mongoose')
const User=require("./User")

const depositSchema=new mongoose.Schema({
    depositer:{
    type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Deposit",depositSchema)