const express = require("express");
const { userModel, todoModel } = require("./db");
const { auth, JWT_SECRET } = require("./authentication");
const jwt = require("jsonwebtoken");
const { mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://Parbhatkapila:%40Kapila0312@cluster-1.xps1vjs.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await userModel.create({
    email: email,
    password: password,
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
    email: email,
    password: password,
  });
  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );

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

app.listen(3000);
