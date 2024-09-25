const router = require("express").Router();
const Transfer = require("../models/Transfer");
const User = require("../models/User");

router.post("/transfer", async (req, res) => {
  try {
    // Extract sender and receiver from the request body
    const { sender, receiver, amount } = req.body;

    // Create a new transfer transaction
    const newTransaction = new Transfer({
      sender,
      receiver,
      amount,
    });

    // Save the transaction to the database
    const transaction = await newTransaction.save();
    const populatedTransaction = await Transfer.findById(transaction._id)
      .populate('sender', 'username')
      .populate('receiver', 'username');

    res.status(200).json(populatedTransaction);

    // Update sender's information (assuming you want to do this)
    const updateSender = await User.findById(sender);
    const updateReceiver = await User.findById(receiver);

    if (!updateSender) {
      return res.status(404).json({ message: "Sender not found" });
    }
    if (!updateReceiver) {
        return res.status(404).json({ message: "Receiver not found" });
      }

    updateSender.amount -=amount;
    await updateSender.save();

    updateReceiver.amount +=amount;
    await updateReceiver.save();

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/",async (req,res)=>{
    try{
        let transfers;
        transfers=await Transfer.find();
        res.status(200).json(transfers);
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get("/:id",async (req,res)=>{
  try {
    const personId = req.params.id;

    // Query the database to find transactions associated with the person
    const transactions = await Transfer.find({ $or: [{ sender: personId }, { receiver: personId }] });

    // Send the transactions as a JSON response
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = router;
