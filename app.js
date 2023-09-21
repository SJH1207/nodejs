const express = require("express");
const app = express();

// 允许跨域
const cors = require('cors')
app.use(cors());

// 
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

app.use(express.urlencoded({ extended: false }));

const router = require("./12.apiRouter");

app.use("/api", router);

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
