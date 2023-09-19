const express = require("express");

const app = express();

const mw = (req, res, next) => {
  console.log("这是一个简单的中间件");
  next();
};

app.use(mw);

app.get("/", (req, res) => {
    console.log('获得/请求');
  res.send("获得/请求");
});

app.get("/user", (req, res) => {
    console.log('获得/user请求');
  res.send("获得/user请求");
});

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
