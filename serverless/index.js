const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("thanh cong");
})

app.listen(3000);