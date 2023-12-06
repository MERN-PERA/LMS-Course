const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL)
.then(() => console.log('DB Connected'))
.catch(() => console.log('Not Connected'))



const studentRouter = require("./Routes/studentsRoute");
const courseRouter = require("./Routes/coursesRoute")
const paymentRouter = require("./Routes/paymentsRoute")
const userRouter=require("./Routes/userRoute")
const userAdminRouter=require("./Routes/userAdminRoute")


app.use("/student", studentRouter);
app.use("/course", courseRouter);
app.use("/payment", paymentRouter);
app.use("/loginUser",userRouter)
app.use("/loginAdmin",userAdminRouter)

app.listen(PORT, ()=>{
    console.log(`server is up and running on port ${PORT}`);

});

