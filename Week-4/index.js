const express = require("express");
const app = express();


const users = [{
    name: 'jaat',
    kidneys: [{
        healthy : false
    }, {
        healthy: true
    }]
}]


app.use(express.json());

app.get("/", function(req, res){
    const jaatKidneys = users[0].kidneys
    const noofKidneys = jaatKidneys.length;
    let noofhealthykidneys = 0;
    for(i = 0; i<jaatKidneys.length; i++){
        if(jaatKidneys[i].healthy){
            noofhealthykidneys = noofhealthykidneys + 1;
        }

    }


    const noofunhealthykidneys = noofKidneys - noofhealthykidneys;

    res.json({
        noofKidneys,
noofhealthykidneys,
        noofunhealthykidneys
    })
})

app.post("/", function(req, res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })

    res.json({
        message: "It's Done Again"
    })
})




app.put("/", function(req, res){
    
})

app.delete("/", function(req, res){
    
})



app.listen(3000);



