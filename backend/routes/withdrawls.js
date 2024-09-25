const router = require("express").Router();
const Withdrawl = require("../models/Withdrawl");
const User = require("../models/User");

router.post("/withdraw", async (req, res) => {
  try {
   
    const { withdrawer, amount } = req.body;

   
    const newWithdrawl = new Withdrawl({
      withdrawer,
      amount,
    });

    
    const debit = await newWithdrawl.save();
    const populatedWithdrawl= await Withdrawl.findById(debit._id)
      .populate('withdrawer', 'username')

    res.status(200).json(populatedWithdrawl);

   
    const updateWithdrawer = await User.findById(withdrawer);

    if (!updateWithdrawer) {
      return res.status(404).json({ message: "Withdrawer not found" });
    }

    updateWithdrawer.amount -=amount;
    await updateWithdrawer.save();


  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.get("/:id",async (req,res)=>{
  try {
    const personId = req.params.id;

    const transactions = await Withdrawl.find({ withdrawer: personId });

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = router;
