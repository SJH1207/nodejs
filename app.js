const express = require("express");
const parser = require("body-parser");
const app = express();
const joi = require("joi");

// 允许跨域
const cors = require("cors");
app.use(cors());

/* 原生 */
// 解析JSON格式
// app.use(express.json())
// 配置解析表达数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
// app.use(express.urlencoded({ extended: false }));

/* 第三方 */
// 解析JSON格式
app.use(parser.json());
// 解析 application/x-www-form-urlencoded 格式
// app.use(parser.urlencoded({ extended: false }));

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
  // status 默认值为 400，表示失败的情况
  // msg 的值，可能是一个错误对象，也可能是一个错误的描述字符串，也可能是正确的番号提示
  res.cc = function (msg, status = 400) {
    res.send({
      status,
      msg: msg instanceof Error ? msg.message : msg,
    });
  };
  next();
});

// 导入并使用用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err);
  // 身份认证失败后的错误
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败！");
  // 未知的错误
  res.cc(err);
});

app.listen(8080, () => {
  console.log("express is running at http://127.0.0.1:8080");
});
