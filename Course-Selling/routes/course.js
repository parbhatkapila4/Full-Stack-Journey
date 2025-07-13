const express = require("express");
const { userModel } = require("./db");
const app = express();



app.use(express.json())



app.post("/user-signup",  async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const User = await UserModel.create({
        email,
        password,
        name
    })
res.json({
    message: "You are successfully Logged In"
})
});

app.post("/user-login", (req, res) => {
   const email = req.body.email;
    const password = req.body.password;

    const user = userModel.findOne({
        email: email
    })
    if(!user){
        res.status(404).json({
            message: "Invalid Credentials"
        })
        return
    }
})

app.post("/user-purchase-course", (req, res) => {
    
})


app.post("/user-my-course", (req, res) => {
    
})  



app.post("/admin-login", (req, res) => {
    
})


app.post("/admin-signup", (req, res) => {
    
})


app.post("/admin-create-course", (req, res) => {
    
})

app.post("/admin-delete", (req, res) => {
    
})

app.post("/admin-add-content", (req, res) => {
    
})





app.listen(3000);