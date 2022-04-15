// Step 1.1 : Install Nodemon for Live Server Feature : npm install nodemon
// Step 1.2 : Install Express for Less Messy Code : npm install express
// Step 1.3 : write ",start" : "nodemon index.js" at package.json
// Step 3.1 : Install body-parser to read data from Postman | npm install body-parser
// Step 9.1 : Simply, Start MongoDB Server on your PC (maybe using GitBash)
// Step 9.2 : Install mongoose by typing ' npm install mongoose '

// Step 12.1 : Install morgan (optional) to see the log of  GET/POST/PUT/DELETE requests in terminal
// Type 'npm install morgan'

// What's New ? : Solving Assignment 1

const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");

app.use("/dishes", dishRouter);
app.use("/leaders", leaderRouter);
app.use("/promotions", promoRouter);

app.use("/", (req, res) => {
  res.send("Welcome to my Restaurant");
});
app.listen(3000);
