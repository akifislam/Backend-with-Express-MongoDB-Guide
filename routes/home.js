const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Home Page | Kuch Mitha Hoye Jaye 🍫");
});

router.get("/home", (req, res) => {
  res.sendFile("/Users/akifislam/Desktop/SequenceNode/index.html");
});

module.exports = router;
