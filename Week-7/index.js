const bcrypt = require("bcryptjs");
const {z, parse} = require("zod");
const express = require("express");
const { userModel, todoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { mongoose } = require("mongoose");
const JWT_SECRET = "OpentoEveryone";


mongoose.connect(
  "mongodb+srv://Parbhatkapila:%40Kapila0312@cluster-1.xps1vjs.mongodb.net/todo-app-week-7");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {

  const zodMethod = z.object({
    email: z.string().min(5).max(20).includes("@", "gmail.com"),
    password: z.string().min(8).max(22).uppercase(),
    name: z.string().startsWith('a')
  })

const parseData = zodMethod.safeParse(req.body);


if(parseData.success){
  res.json({
    message: "Your format is Correct"
  })
  return
}else{
  res.json({
    message: "Invalid format",
    error: parseData.error
  })
  return
}
// Down here is the method to add data without validation.. Used body as it is post request
  // const email = req.body.email;
  // const password = req.body.password;
  // const name = req.body.name;



const hashedPassword = bcrypt.hash(password, 10)
console.log(hashedPassword);

  await userModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });

      res.json({
    message: "You are Logged in",
  });

});


app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email: email
  });
if(!user){
  res.status(404).json({
    message: "User is not found in DataBases"
  })
  return
}
const passwordMatch = await bcrypt.compare(password, user.password)
  if (passwordMatch) {
   const token = jwt.sign({
    id: user._id
   },JWT_SECRET)

    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "Invalid Credentials",
    });
  }
});
app.post("/todo", auth, async (req, res) => {
  const title = req.body.title;
  const done = req.body.done;
  const userId = req.userId;

  await todoModel.create({
    title: title,
    done: done,
    userId: userId,
  });

  res.json({
    message: "To do is Created",
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.body.userId;

  const todos = await todoModel.find({
    userId,
  });
  res.json({
    todos,
  });
});



function auth(req, res, next){
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET)

  if(decodedData){
    req.userId = decodedData.id
    next()
  }else{
    res.status(404).json({
      message:"Invalid Credentials"
    })
  }
}


app.listen(3000);



