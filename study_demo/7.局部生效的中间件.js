const express = require("express");

const app = express();

const mw = (req, res, next) => {
  console.log("这是一个局部中间件");
  next();
};
const mw2 = (req, res, next) => {
  console.log("这是一个局部中间件222");
  next();
};

app.get("/", mw, mw2, (req, res) => {
  res.send("获得/请求");
});

app.get("/user", [mw, mw2], (req, res) => {
  res.send("获得/user请求");
});

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
