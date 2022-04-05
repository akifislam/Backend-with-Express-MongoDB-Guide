// Step 1.1 : Install Nodemon for Live Server Feature : npm install nodemon
// Step 1.2 : Install Express for Less Messy Code : npm install express
// Step 1.3 : write ",start" : "nodemon index.js" at package.json
// Step 3.1 : Install body-parser to read data from Postman | npm install body-parser

const chocolates = ["Snekers", "Kitkat", "Dairy Milk Silk"];

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// For localhost:3000/ will send all chocolates list
app.get("/", (req, res) => {
  res.send(chocolates);
});

// For localhost:3000/2 will send Kitkat
// For localhost:3000/3 will send Dairy Milk Silk

app.get("/:chocolateID", (req, res) => {
  const index = req.params.chocolateID;
  res.send(chocolates[index]);
});

app.listen(3000);
