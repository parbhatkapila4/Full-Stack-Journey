const express = require("express");
const userMiddleware = require("../middlewares/user");
const router = express.Router();

router.post("/signup", (req, res) => {

})

router.get("/courses", (req, res) => {


})

router.post("/courses/courseId", userMiddleware, (req, res) => {

})

router.get("/purchasedCourses", userMiddleware, (req, res) =>{


})

module.exports = router;
