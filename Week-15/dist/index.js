import jwt from "jsonwebtoken";
import { UserModel } from "./Database/db.js";
import express from "express";
import mongoose from "mongoose";
import { auth } from "./Authentication/auth.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    UserModel.create({
        username, password
    });
    res.json({
        message: "User is registered successfully"
    });
});
app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const valid = await UserModel.findOne({
        username: username,
        password: password
    });
    if (valid) {
        const token = jwt.sign({
            userId: valid._id.toString()
        }, process.env.JWT_SECRET);
        res.json({
            token
        });
    }
    else {
        res.status(404).json({
            message: "ERROR"
        });
    }
});
app.get("/me", auth, async (req, res) => {
    const userId = req.userId;
    const valid = await UserModel.findOne({
        _id: userId
    });
    res.json({
        valid
    });
});
app.listen(3000, () => {
    mongoose.connect("mongodb+srv://Parbhatkapila:%40Kapila0312@cluster-1.xps1vjs.mongodb.net/DEMO");
    console.log("Server is listening on this port");
});
//# sourceMappingURL=index.js.map