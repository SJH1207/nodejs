const express = require("express");

const app = express();

app.get("/", (req, res) => {
  throw new Error("服务器出错了");
  res.send("获得/请求");
});

app.get("/user", (req, res) => {
  res.send("获得/user请求");
});

app.use((err, req, res, next) => {
  console.log("出错了", err.message);
  res.send("出错了" + err.message);
  next();
});

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
