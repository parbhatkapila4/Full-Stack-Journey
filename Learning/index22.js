const express = require("express");

const { response } = require("express");

const app = express();

function middleware (req, res, next){
  console.log(`Method of this is ${req.method}`);
    console.log(`Url of this is ${req.hostname}`);
  console.log(new Date());

  next();
}

app.use(middleware);

app.get("/sum" , function(req ,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a+b
  })
})

  app.get("/subtract" ,function(req ,res){
  const a = req.query.a;
  const b = req.query.b;

   res.json({
    ans: a - b
  })
  })

  app.get("/multiply" ,function(req ,res){
  const a = req.query.a;
  const b = req.query.b;

   res.json({
    ans: a*b
  })
})
  app.get("/divide" ,function(req, res){
  const a = req.query.a;
  const b = req.query.b;

   res.json({
    ans: a/b
  })

})

app.listen(3000);



const express = require("express");
const bodyparser = require ("body-parser");
const app2 = express();

app.use(bodyparser.json());

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b,
  });
});

app2.listen(3000);





// Learning Differance between Fetch and Axios ------->


async function main() {
  fetch("")
  .then(async response =>{
    const json = await response.json()
    console.log(json.todos.length);
  })
}
// Method 1 i.e., .then syntax which we will never prefer to write^


main()


async function main(){
  const response = await fetch("")
  const json = await response.json()
  console.log(json.todos.length);
}


// Method 2 i.e., async await which we will always prefer while writing fetch ^

const axios = require("axios");

async function main() {
  const response = await axios.post("https://httpdump.app/dumps/a97ea2fd-acdf-4353-88a5-83d1be7a34b2",{
    username: "Parbhat Kapila",
    password: "123123132"
  },{
    headers:{
      Authorization:"Is it done",
    }
  })
  console.log(response.data);
}
main();




// That's how we write the axios code. instead of fetch.From line 94 to 109 we can see the differance between fetch and axios