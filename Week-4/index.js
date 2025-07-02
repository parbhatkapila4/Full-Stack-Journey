const express = require("express");
const app = express();


const users = [{
    name: 'jaat',
    kidneys: [{
        healthy : true
    }, {healthy: false}]
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
    for(i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    if(isthereanyunhealthykidneys()){
 const newKidneys = [];
    for(i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({mgs: "Done for Delete"})        


    }else{
        res.status(411).json({
            msg: "You have no such bad kidneys"
        });
    }



})


function isthereanyunhealthykidneys(){
    let atleastoneunhealthykidney = false;
    for(i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthykidney = true;
        }
}

return atleastoneunhealthykidney;

}
app.listen(3000);



