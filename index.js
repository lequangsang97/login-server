const express = require("express");
const nodemailer = require("nodemailer");
const bodyPaser = require("body-parser");
const { email, password } = require("./config");

const app = express();
app.use(bodyPaser.json());

const port = process.env.PORT || 4000;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: email,
    pass: password
  }
});

var mailOptions = {
  from: "Nodejs maler",
  to: "sang.lequang94@gmail.com",
  subject: "Sending Email using Node.js",
  html: `<h2>That not differcute</h2>`
};

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/send-email", (req, res) => {
  var body = req.body;

  mailOptions.to = body.to;
  mailOptions.subject = body.subject;

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json(400, "Erro");
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Thanh Cong", info: info.response });
    }
  });
});
app.listen(port, () => console.log(`server is running on port ${port}`));
