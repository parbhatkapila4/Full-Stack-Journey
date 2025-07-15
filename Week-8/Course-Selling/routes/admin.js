const {Router} = require ("express");
const adminRouter = Router();
const {AdminModel} = require("../db")

adminRouter.post("/login", (req, res) =>{
    res.json({
        message: "Admin Login"
    })
})

adminRouter.post("/signup", (req, res) =>{
    res.json({
        message: "Admin signup"
    })
})

adminRouter.post("/addcourse", (req, res) =>{
    res.json({
        message: "Admin added a new Course"
    })
})


adminRouter.put("/content", (req, res) =>{
    res.json({
        message: "Admin added a new Content"
    })
})



adminRouter.delete("/delete", (req, res) =>{
    res.json({
        message: "Admin Deleted a Course"
    })
})



module.exports = {
    adminRouter
}