const fs = require("fs")

function main(fileName){
fs.readFile(fileName,"utf-8", (err, data) =>{

    let total = 0;
    for(i = 0; i < data.length; i++){
        if(data[i] === "") {
total++;
        }
    }
    console.log(total);
})
}

main("a.txt");








const express = require("express")

function calculateSum(a,b){
    let ans = 0;
    for(i = 0; i <n; i++){
        ans = ans + i;
    }
    return ans;
}


const app = express();

app.get("/", function(req, res){
    const n = req.query.n;
    const app = calculateSum(n);
    res.send(app)
});


app.listen(3000);




const express = require("express");

function calculateSum2(a,b){
    return a + b;
}

const app2 = express()

app2.get("/", function(req,res){
    const n = req.query.a;
    const n1 = req.query.b;
    const app2 = calculateSum2(a,b);
    res.send(app2);
})

app.listen(3001);



