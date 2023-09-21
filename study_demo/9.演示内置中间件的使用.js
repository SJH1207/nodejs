const express = require("express");

const app = express();

// app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("获得/user请求");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  res.send("获得/book请求");
});

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
