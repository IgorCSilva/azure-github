const express = require("express");
const app = express();
const port = 3000;

// Database.
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb"
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const tableName = "people";
const insertPeopleSql = `INSERT INTO ${tableName}(name) values("Igor")`;
const getPeopleSql = `SELECT * FROM ${tableName}`;

connection.connect(function(err) {
  if (err) console.log("Error: ", err);
  console.log("Connected!");

  const createTableSql = `CREATE TABLE IF NOT EXISTS ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
  connection.query(createTableSql, function (err, result) {
    if (err) {
      console.log("Error: ", err);
      console.log("Result: ", result);

      console.log("Table not created");

    } else {
      console.log("Table created");
    }
  });
});


app.get("/", (req, res) => {
  // Insert people.
  connection.query(insertPeopleSql);

  connection.query(getPeopleSql, function (err, result, fields) {
    if (err) {
      console.log("Fields: ", fields);
      console.log("Error: ", err);
      console.log("Result: ", result);
    }

    var list = "";
    result.forEach(people => {
      list = list + `<li>${people.name}</li>`;
    });

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>${list}</ol>
    `);
  });
});

app.listen(port, () => {
  console.log("Rodando na porta ", + port);
});