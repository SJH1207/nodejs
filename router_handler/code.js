// 导入数据库操作模块
const db = require("../db/index");

// 测试
exports.test = (req, res) => {
  const sqlStr = `select * from teacher`;
  db.query(sqlStr, (error, result) => {
    console.log(error, result);
    if (error) {
      return res.send({ code: 400, msg: error.message });
    }

    if (result.length > 0) {
      return res.send({ code: 200, msg: "查询成功!", data: result });
    }
    return res.send({ code: 200, msg: "查询成功!", data: [] });
  });
};

// 新增
exports.add = (req, res) => {
  const obj = req.body;
  // 校验为空
  if (!obj.video_code || !obj.magnet || !obj.chinese) {
    return res.send({ code: 400, msg: "video_code或magnet或chinese为空" });
  }

  // 是否存在
  const sqlStr = "select * from video_code where video_code=?";
  db.query(sqlStr, obj.video_code, (error, result) => {
    if (error) {
      return res.send({ code: 400, msg: error.message });
    }

    if (result.length > 0) {
      return res.send({ code: 400, msg: "该番号已存在!" });
    }

    // 新增
    const addsql = "insert into video_code set ?";
    db.query(addsql, obj, (error, result) => {
      if (error) {
        return res.send({ code: 400, msg: error.message });
      }
      if (result.affectedRows !== 1) {
        return res.send({ code: 400, msg: "新增失败，请稍后再试！" });
      }
      console.log(result);
      return res.send({ code: 200, msg: "新增成功!" });
    });
    return;
  });
};

// 查询
exports.search = (req, res) => {
  const obj = req.body;
  console.log(obj, obj);
  // 是否存在
  const sqlStr = `select * from video_code where teacher_name = '${
    obj.teacher_name
  }'  and video_code_ch like "%${(
    obj.video_code_ch || ""
  ).toUpperCase()}%" and magnet like "%${
    obj.magnet || ""
  }%" and video_name like "%${obj.video_name || ""}%" order by id ${
    obj.order || "desc"
  }`;

  console.log("sqlStr", sqlStr);
  db.query(sqlStr, (error, result) => {
    console.log(error, result);
    if (error) {
      return res.send({ code: 400, msg: error.message });
    }

    console.log(result);

    if (result.length > 0) {
      return res.send({ code: 200, msg: "查询成功!", data: result });
    }
    return res.send({ code: 200, msg: "查询成功!", data: [] });
  });
};

// 删除
exports.del = (req, res) => {
  const obj = req.body;
  // 校验为空
  if (!obj.id) {
    return res.send({ code: 400, msg: "id为空" });
  }
  // 是否存在
  const delSql = "delete from video_code where id= ?";

  db.query(delSql, obj.id, (error, result) => {
    console.log(error, result);
    if (error) {
      return res.send({ code: 400, msg: error.message });
    }

    if (result.affectedRows !== 1) {
      return res.send({ code: 400, msg: "删除失败，请稍后再试！" });
    }
    return res.send({ code: 200, msg: "删除成功!" });
  });
};

// 编辑
exports.edit = (req, res) => {
  const obj = req.body;
  // 校验为空
  if (!obj.video_code || !obj.id || !obj.magnet || !obj.chinese) {
    return res.send({ code: 400, msg: "id或video_code或magnet或chinese为空" });
  }
  // 编辑
  const editsql = `update video_code set ? where id=${obj.id}`;
  db.query(editsql, obj, (error, result) => {
    if (error) {
      return res.send({ code: 400, msg: error.message });
    }
    if (result.affectedRows !== 1) {
      return res.send({ code: 400, msg: "编辑失败，请稍后再试！" });
    }
    console.log(result);
    return res.send({ code: 200, msg: "编辑成功!" });
  });
};

// 查询人
exports.searchTeacher = (req, res) => {
  const obj = req.body;
  console.log(obj, obj);
  // 是否存在
  const sqlStr = `select * from teacher`;

  db.query(sqlStr, (error, result) => {
    console.log(error, result);
    if (error) {
      return res.send({ code: 400, msg: error.message });
    }

    if (result.length > 0) {
      return res.send({ code: 200, msg: "查询成功!", data: result });
    }
    return res.send({ code: 200, msg: "查询成功!", data: [] });
  });
};
