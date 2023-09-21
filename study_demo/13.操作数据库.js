const express = require("express");

const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  database: "video_code",
});

const sql = "SELECT * FROM video_code";
// db.query(sql, (err,res) => {
//   if (err) return console.log(err.message);
//   console.log(res);
// })

const obj = { id: 4, video_code: "111", video_code_ch: "123" ,status: 0};
// const addsql = 'INSERT INTO video_code (video_code,video_code_ch) VALUES (?,?)'
// db.query(addsql,[obj.video_code,obj.video_code_ch], (err,res) => {
//   if (err) return console.log(err.message);
//   if (res.affectedRows === 1) {
//     console.log('成功', res);
//   }
// })
// const addsql = "insert into video_code set ?";
// db.query(addsql, obj, (err, res) => {
//   if (err) return console.log(err.message);
//   if (res.affectedRows === 1) {
//     console.log("成功", res);
//   }
// });

// const updatesql = "update video_code set video_code=?,video_code_ch=? where id=?";
// db.query(updatesql, [obj.video_code, obj.video_code_ch, obj.id], (err, res) => {
//   if (err) return console.log(err.message);
//   if (res.affectedRows === 1) {
//     console.log("成功", res);
//   }
// });
// const updatesql = "update video_code set ? where id=?";
// db.query(updatesql, [obj, obj.id], (err, res) => {
//   if (err) return console.log(err.message);
//   if (res.affectedRows === 1) {
//     console.log("成功", res);
//   }
// });

// const delsql = "delete from video_code where id=?";
const delsql = "update video_code set status=? where id=?";
db.query(delsql, [obj.status,obj.id], (err, res) => {
  if (err) return console.log(err.message);
  if (res.affectedRows === 1) {
    console.log("成功", res);
  }
});
