const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to My Restaurant, No Eating, Only Fasting :) ");
});

module.exports = router;
