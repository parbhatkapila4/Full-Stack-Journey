const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const router = express.Router();
const { Admin } = require("../Database")

router.post("/signup", async (req, res)=>{
const username = req.body.username;
const password = req.body.password;

await Admin.create({
    username: username,
    password: password
})
res.json({
    message: "Admin created Successfully"
})

})

router.post("/courses",adminMiddleware, (req, res)=>{


})

router.get("/courses",adminMiddleware, (req, res)=>{

})


module.exports = router;