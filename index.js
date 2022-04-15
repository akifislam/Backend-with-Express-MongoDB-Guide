const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Middleware
const app = express();
app.use(bodyparser.json());
app.use(morgan("tiny"));

//Routes
const indexRouter = require("./routes/indexRouter");
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");

// End Points
mongoose
  .connect("mongodb://localhost:27017/dishes", { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connected Successfully");
    app.use("/", indexRouter);
    app.use("/dishes", dishRouter);
    app.use("/leaders", leaderRouter);
    app.use("/promotions", promoRouter);
  });

PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Listening to PORT : " + PORT);
});
