// Step 1.1 : Install Nodemon for Live Server Feature : npm install nodemon
// Step 1.2 : Install Express for Less Messy Code : npm install express
// Step 1.3 : write ",start" : "nodemon index.js" at package.json
// Step 3.1 : Install body-parser to read data from Postman | npm install body-parser

var chocolates = ["Snekers", "Kitkat", "Dairy Milk Silk"];

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(chocolates);
});

app.get("/:chocolateID", (req, res) => {
  const index = req.params.chocolateID;
  res.send(chocolates[index]);
});

app.post("/", (req, res) => {
  chocolates.push(req.body.name);
  console.log("New Chocolate Added : " + req.body.name);
  res.send("New Chocolate Added : " + req.body.name);
});


app.delete("/", (req, res) => {
  chocolates = []; //Empty array;
  console.log("Deleted All Chocolates");
  res.send("Deleted all the chocolates successfully");
});


app.delete("/:id", (req, res) => {
  const index = req.params.id;
  chocolates.splice(index, 1); // Index theke 1 ta element delete korbe
  console.log("Deleted 1 chocolate");
  res.send("Deleted 1 chocolate successfully");
});

app.listen(3000);
