const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.json({
        message: ""
    })
})


courseRouter.get("/courses", (req, res) => {
    res.json({
        message: ""
    })
})

module.exports = {
 courseRouter
}
