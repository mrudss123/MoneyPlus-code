const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Moneyplus@123#",
  database: "finance_tracker",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database");
});
app.post("/add-transaction", (req, res) => {
  const { description, amount, type } = req.body;
  const query = `INSERT INTO transactions (description, amount, type) VALUES (?, ?, ?)`;
  db.query(query, [description, amount, type], (err) => {
    if (err) throw err;
    res.send("Transaction added successfully!");
  });
});
app.get("/transactions", (req, res) => {
  db.query("SELECT * FROM transactions", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
