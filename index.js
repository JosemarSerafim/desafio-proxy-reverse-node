const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "josemar",
  password: "josemar",
  database: "node-app",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(nome) values('josemar')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle</h1>");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
