const express = require("express");
const router = express.Router();

// 导入用户路由处理函数对应的模块
const code_handler = require("../router_handler/code");

// 新增
router.get("/test", code_handler.test);
// 新增
router.post("/add", code_handler.add);
// 查询
router.post("/search", code_handler.search);
// 删除
router.post("/del", code_handler.del);
// 编辑
router.post("/edit", code_handler.edit);

// 查询人
router.post("/searchTeacher", code_handler.searchTeacher);

module.exports = router;
