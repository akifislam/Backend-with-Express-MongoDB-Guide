// Step 1.1 : Install Nodemon for Live Server Feature : npm install nodemon
// Step 1.2 : Install Express for Less Messy Code : npm install express
// Step 1.3 : write ",start" : "nodemon index.js" at package.json
// Step 3.1 : Install body-parser to read data from Postman | npm install body-parser
// Step 9.1 : Simply, Start MongoDB Server on your PC (maybe using GitBash)
// Step 9.2 : Install mongoose by typing ' npm install mongoose '

const mongoose = require("mongoose");
const express = require("express");
const app = express();

//MongoDB Connection
mongoose.connect("mongodb://localhost:27017/chocolates").then(() => {
  console.log("Database Connected Successfully");
});

app.listen(3000);
