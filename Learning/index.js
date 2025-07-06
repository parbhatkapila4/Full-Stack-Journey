const express = require("express");
const app = express();

app.get("/sum/:a/:b", (req, res)=>{
    const a = parseInt(req.params.a);
    const b  =parseInt(req.params.b);

    res.json({
        ans: a + b
    })
})


app.get("/subtract/:a/:b", (req, res) => {
  const {a,b} = req.params;
  res.json({
    ans: a - b,
  });
});

app.get("/multiply/:a/:b", (req, res) => {
  const {a,b} = req.query;
  res.json({
    ans: a * b,
  });
});

app.get("/divide/:a/:b", (req, res) => {
  const {a,b} = req.query;
  res.json({
    ans: a / b,
  });
});

app.listen(3000);
