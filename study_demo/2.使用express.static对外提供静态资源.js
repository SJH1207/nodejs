const express = require("express");

const app = express();

// http://127.0.0.1/1.txt  同名目录谁在前面调用谁的
// app.use(express.static("./files"));
// app.use(express.static("./public"));

// http://127.0.0.1/public/1.txt  添加前缀
app.use('/public',express.static("./public"));

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
