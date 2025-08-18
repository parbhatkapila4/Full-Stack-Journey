const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'parbhatkapila5@gmail.com',
        pass: ''
    },
})
app.use(express.json());
  
app.get("/", async (req, res)=>{
  try{
    let info = await transporter.sendMail({
      from: "parbhatkapila5@gmail.com",
    to: "parbhatkapila@gmail.com",
    subject: "Hello from Vs code",
    text: "Hi there, this is demo mail via nodemailer",
    html: `<h1>Hey man</h1>`,
})
   console.log("Message sent:", info.messageId);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});


app.listen(3000, () => {
    console.log(`server is listening on this Port`);
})