// // const express = require("express");

// // const app = express();

// // function middleware (req, res, next){
// //   console.log(`Method of this is ${req.method}`);
// //     console.log(`Url of this is ${req.hostname}`);
// //   console.log(new Date());

// //   next();
// // }

// // app.use(middleware);

// // app.get("/sum" , function(req ,res){
// //   const a = parseInt(req.query.a);
// //   const b = parseInt(req.query.b);

// //   res.json({
// //     ans: a+b
// //   })
// // })

// //   app.get("/subtract" ,function(req ,res){
// //   const a = req.query.a;
// //   const b = req.query.b;

// //    res.json({
// //     ans: a - b
// //   })
// //   })

// //   app.get("/multiply" ,function(req ,res){
// //   const a = req.query.a;
// //   const b = req.query.b;

// //    res.json({
// //     ans: a*b
// //   })
// // })
// //   app.get("/divide" ,function(req, res){
// //   const a = req.query.a;
// //   const b = req.query.b;

// //    res.json({
// //     ans: a/b
// //   })

// // })

// // app.listen(3000);



// const express = require("express");
// const bodyparser = require ("body-parser");
// const app = express();

// app.use(bodyparser.json());

// app.post("/sum", function (req, res) {
//   const a = parseInt(req.body.a);
//   const b = parseInt(req.body.b);

//   res.json({
//     ans: a + b,
//   });
// });

// app.listen(3000);








