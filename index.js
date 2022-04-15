// Added '/' endpoint to indexRouter.js
// Installed morgan to display GET/POST request log in terminal [npm install morgan]
// Printed "Listening to PORT : ####"
const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");

const indexRouter = require("./routes/indexRouter");
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");

const app = express();

//Middleware
app.use(bodyparser.json());
app.use(morgan("tiny"));

// End Points
app.use("/", indexRouter);
app.use("/dishes", dishRouter);
app.use("/leaders", leaderRouter);
app.use("/promotions", promoRouter);

PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Listening to PORT : " + PORT);
});
