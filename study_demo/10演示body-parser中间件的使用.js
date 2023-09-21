const express = require("express");

const app = express();

const parser = require("body-parser");

app.use(parser.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("获得/user请求");
});

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
