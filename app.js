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

// 导入并使用用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

const codeRouter = require("./router/code");
app.use("/api", codeRouter);

app.listen(8080, () => {
  console.log("express is running at http://127.0.0.1:8080");
});
