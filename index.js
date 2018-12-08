const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 4000;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: "sang.lequang98@gmail.com",
    pass: `thuychung`
  }
});

var mailOptions = {
  from: "sang.lequang97@gmail.com",
  to: "sang.lequang94@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => console.log(`server is running on port ${port}`));
