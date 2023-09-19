const express = require("express");

const router = express.Router()

router.get("/user/list", (req, res) => {
  // GET http://127.0.0.1/user/list
  res.send([
    { name: "张三", age: "18" },
    { name: "李四", age: "18" },
  ]);
});

router.post("/user/add", (req, res) => {
  // POST http://127.0.0.1/user/add
  res.send("/user/add 请求成功");
});

module.exports = router