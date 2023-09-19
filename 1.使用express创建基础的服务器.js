const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  // GET http://127.0.0.1/user
  res.send({ name: "张三", age: "18" });
});

app.post("/user", (req, res) => {
  // POST http://127.0.0.1/user
  res.send("请求成功");
});

app.get("/", (req, res) => {
  // http://127.0.0.1/?name=张三
  console.log(req.query);
  res.send(req.query);
});

// :xxx 是一个动态参数
app.get("/user/:name/:age", (req, res) => {
  // http://127.0.0.1/user/张三
  console.log(req.params);// { name: '张三', age: '18' }
  res.send(req.params);
});


app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
