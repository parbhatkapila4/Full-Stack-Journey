const express = require("express");

const app = express();


function CheckerMiddleware(req, res, next){
    const age = req.query.age;
    if(age >=15){
        next();
    }else{
        res.status(404).json({
            mgs: "You are not applicable for this ride!"
        })
    }
}

app.use(CheckerMiddleware);

app.get("/ride1", (req,res)=> {
    res.json({
        msg: "Go Ahead Enjoy ride 1"
    })
})



app.get("/ride2", (req,res)=> {
    res.json({
        msg: "Yaaaa! Enjoy ride 2"
    })
})




app.listen(3000);