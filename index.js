// Step 1.1 : Install Nodemon for Live Server Feature : npm install nodemon
// Step 1.2 : Install Express for Less Messy Code : npm install express
// Step 1.3 : write ",start" : "nodemon index.js" at package.json
// Step 3.1 : Install body-parser to read data from Postman | npm install body-parser

var chocolates = ["Snekers", "Kitkat", "Dairy Milk Silk"];

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const chocolateRoutes = require("./routes/chocolates");

app.use("/chocolates", chocolateRoutes);

app.listen(3000);
