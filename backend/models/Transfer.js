const mongoose=require("mongoose");
const User =require("./User");

const transferSchema=new mongoose.Schema({
    tno:{
        type:Number,
        
        default:0
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

transferSchema.pre('save', async function (next) {
    try {
      // Find the latest transaction and get its transaction number
      const latestTransaction = await this.constructor.findOne({}, {}, { sort: { tno: -1 } });
      
      // Increment the transaction number for the current transaction
      this.tno = latestTransaction ? latestTransaction.tno + 1 : 1;
      
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports=mongoose.model("Transfer",transferSchema)