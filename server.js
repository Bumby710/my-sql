const express = require("express");
const mysql = require("mysql");

const server = express();

const db = mysql.createConnection({
  host: "localhoast",
  user: "root",
  password: "student",
  database: "dog"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Is Connected");
});

server.listen("3000", function() {
  console.log("listening on port 3000");
});
