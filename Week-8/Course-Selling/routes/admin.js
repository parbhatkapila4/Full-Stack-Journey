const {Router} = require("express");
const adminRouter = Router();


adminRouter.post("/", (req, res) => {
    res.json({
        message:""
    })
} )



module.exports = {
    adminRouter
}