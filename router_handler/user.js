// 导入数据库操作模块
const db = require("../db/index");
// 导入 bcryptjs 这个包
const bcrypt = require("bcryptjs");
// // 导入生成 Token 的包
const jwt = require('jsonwebtoken')
// // 导入全局的配置文件
const config = require('../config')

// 注册新用户的处理函数
exports.regUser = (req, res) => {
  const userInfo = req.body;
  // 校验为空
  // if (!userInfo.username || !userInfo.password) {
  //   // return res.send({ code: 400,  msg: "username或password为空" });
  //   return res.cc('username或password为空')
  // }

  // 是否存在
  const sqlStr = "select * from user where username=?";
  db.query(sqlStr, userInfo.username, (error, result) => {
    if (error) {
      // return res.send({ code: 400, msg: error.message });
      return res.cc(error);
    }

    if (result.length > 0) {
      // return res.send({ code: 400, msg: "该用户名已被占用,请更换其他用户名!" });
      return res.cc('该用户名已被占用,请更换其他用户名!')
    }

    // 加密密码
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);

    // 新增
    const addsql = "insert into user set ?";
    db.query(addsql, userInfo, (error, result) => {
      if (error) {
        // return res.send({ code: 400, msg: error.message });
        return res.cc(error)
      }
      if (result.affectedRows !== 1) {
        // return res.send({ code: 400, msg: "注册用户失败，请稍后再试！" });
        return res.cc("注册用户失败，请稍后再试！")
      }
      // res.send({ code: 200, msg: "注册成功!" });
      res.cc('注册成功!',200)
    });
  });
};

// 登录的处理函数
exports.login = (req, res) => {
  // 接收表单的数据
  const userinfo = req.body
  // 定义 SQL 语句
  const sql = `select * from user where username=?`
  // 执行 SQL 语句，根据用户名查询用户的信息
  db.query(sql, userinfo.username, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是获取到的数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')

    // TODO：判断密码是否正确
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
    if (!compareResult) return res.cc('登录失败！')

    // TODO：在服务器端生成 Token 的字符串
    const user = { ...results[0], password: '', user_pic: '' }
    // 对用户的信息进行加密，生成 Token 字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
    // 调用 res.send() 将 Token 响应给客户端
    res.send({
      status: 200,
      message: '登录成功！',
      token:  'Bearer ' + tokenStr,
    })
  })
}