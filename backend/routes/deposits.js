const router = require("express").Router();
const Deposit = require("../models/Deposit");
const User = require("../models/User");

router.post("/deposit", async (req, res) => {
  try {
   
    const { depositer, amount } = req.body;

   
    const newDeposit = new Deposit({
      depositer,
      amount,
    });

    
    const credit = await newDeposit.save();
    const populatedDeposit= await Deposit.findById(credit._id)
      .populate('depositer', 'username')

    res.status(200).json(populatedDeposit);

   
    const updateDepositer = await User.findById(depositer);

    if (!updateDepositer) {
      return res.status(404).json({ message: "depositer not found" });
    }

    updateDepositer.amount +=amount;
    await updateDepositer.save();


  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.get("/:id",async (req,res)=>{
  try {
    const personId = req.params.id;

    const transactions = await Deposit.find({ depositer: personId });

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = router;
