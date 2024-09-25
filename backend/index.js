const express=require("express")
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");

const userRoute=require("./routes/users")
const transferRoute=require("./routes/transfers")
const authRoute=require("./routes/auth")
const depositRoute=require("./routes/deposits")
const withdrawRoute=require("./routes/withdrawls")


app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://bhanuprakash:43HWDTn6pW%23.2CN@cluster0.vcrwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Connection succesful"))
.catch(err=>console.log(err))



app.use("/api/users",userRoute);
app.use("/api/transfers",transferRoute)
app.use("/api/auth",authRoute)
app.use("/api/deposits",depositRoute)
app.use("/api/withdrawls",withdrawRoute)

app.listen(5000,()=>{
    console.log("Server running")
})