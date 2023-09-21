const express = require("express");

const app = express();

// 顺序执行
app.use((req, res, next) => {
  console.log('我是第一个中间件');
  const time = Date.now();
  req.startTime = time;
  next();
});

app.use((req, res, next) => {
  console.log('我是第二个中间件');
  next();
});

app.use((req, res, next) => {
  console.log('我是第三个中间件');
  next();
});

app.get("/", (req, res) => {
  res.send("获得/请求" + req.startTime);
});

app.get("/user", (req, res) => {
  res.send("获得/user请求" + req.startTime);
});

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
