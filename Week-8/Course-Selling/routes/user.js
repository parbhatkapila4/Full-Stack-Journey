const {Router} = require("express");


const userRouter = Router();


userRouter.post("/signup", (req, res) => {
    res.json({
        message: ""
    })
})

userRouter.post("/signin", (req, res) => {
    res.json({
        message: ""
    })
})

userRouter.get("/purchases", (req, res) => {
    res.json({
        message: ""
    })
})


function userauth(){
    
}


module.exports = {
    userRouter
}