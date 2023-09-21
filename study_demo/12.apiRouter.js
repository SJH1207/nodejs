const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  const query = req.query;
  res.send({
    code: 200,
    msg: "GET请求成功",
    data: query,
  });
});

router.post("/post", (req, res) => {
  const body = req.body;
  res.send({
    code: 200,
    msg: "POST请求成功",
    data: body,
  });
});

router.delete("/delete", (req, res) => {
  res.send({
    code: 200,
    msg: "DELETE请求成功",
  });
});

router.post("/user/add", (req, res) => {
  // POST http://127.0.0.1/user/add
  res.send("/user/add 请求成功");
});

module.exports = router;
