const express = require("express");
const router = express.Router();

// 导入用户路由处理函数对应的模块
const user_handler = require("../router_handler/user");

// 注册新用户
router.post("/reguser", user_handler.regUser);
// 登录
router.post("/login", user_handler.login);
// 校验token
router.post("/checkToken", user_handler.checkToken);

module.exports = router;
