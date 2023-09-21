const express = require("express");

const app = express();

const router = require('./4.router')

app.use('/api',router)

app.listen(80, () => {
  console.log("express is running at http://127.0.0.1");
});
