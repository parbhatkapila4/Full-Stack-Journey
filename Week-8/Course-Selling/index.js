const express = require("express");
// require("dotenv").config();
const {userRouter} = require("./routes/user");
const { courseRouter } = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);



// We have use this so that if we are unable to connect to mongoose database our server will crash at instant it wont be able to take or run anything on port (Line-17 - Line-23)
async function main(){
await mongoose.connect("mongodb+srv://Parbhatkapila:%40Kapila0312@cluster-1.xps1vjs.mongodb.net/course-selling-backend");

app.listen(3000);
console.log("Connecting to Port 3000;")
}

main();