// 1. Write require('express')
// 2. Intialize express.Router()

var chocolates = ["Snekers", "Kitkat", "Dairy Milk Silk"];

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(chocolates);
});

router.get("/:chocolateID", (req, res) => {
  const index = req.params.chocolateID;
  res.send(chocolates[index]);
});

router.post("/", (req, res) => {
  chocolates.push(req.body.name);
  console.log("New Chocolate Added : " + req.body.name);
  res.send("New Chocolate Added : " + req.body.name);
});

router.delete("/", (req, res) => {
  chocolates = []; //Empty array;
  console.log("Deleted All Chocolates");
  res.send("Deleted all the chocolates successfully");
});

router.delete("/:id", (req, res) => {
  const index = req.params.id;
  chocolates.splice(index, 1); // Index theke 1 ta element delete korbe
  console.log("Deleted 1 chocolate");
  res.send("Deleted 1 chocolate successfully");
});

// As it will be required by app.js, we are exporting it
module.exports = router;
