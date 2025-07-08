const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Randomuser1122"
const app = express();

app.use(express.json());

const users = [];

function generateRandomToken(length = 32) {
  let token = "";
  const options =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    token = token + options.charAt(Math.floor(Math.random() * options.length));
  }
  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    Message: "Hey you're Signed in!",
  });

  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;


  console.log(users);

  const foundUser = users.find(function (u) {
    if (u.username == username && u.password == password) {
      return true;
    } else return false;
});

  if (foundUser) {
    const token = jwt.sign({
      username: username
    }, JWT_SECRET);
    // foundUser.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(404).send({
      msg: "Invalid Username & Password",
    });
  }
});



app.get("/me", function(req,res){
  const token = req.headers.token;
const decodeInfo = jwt.verify(token, JWT_SECRET); 
  let foundUser = null;

  for(i = 0; i<users.length; i++){
if(users[i].token == token){
  foundUser = users[i]
}
  }

  if(foundUser){
    res.json({
      username : foundUser.username,
      password : foundUser.password
    })
  }else{
    res.send({
      message: "Token invalid"
    })
  }

    
})

app.listen(3000);
