const express = require("express");
const router = express.Router();

dishes = ["Bhaat", "Potol", "Dhreosh", "Misty Kumra", "Begun"];

router.get("/", (req, res) => {
  res.send(dishes);
});

router.get("/:dishID", (req, res) => {
  const index = req.params.dishID;
  res.send(dishes[index]);
});

router.post("/", (req, res) => {
  const new_dish = req.body.name;
  dishes.push(new_dish);
  res.send("Added new dish :" + new_dish);
});

router.put("/:dishID", (req, res) => {
  const index = req.params.dishID;
  dishes[index] = req.body.name;
  res.send("Updated dish of index : " + index);
});

router.delete("/", (req, res) => {
  dishes = [];
  res.send("Deleted all dishes :( ");
});

router.delete("/:dishID", (req, res) => {
  const index = req.params.dishID;
  dishes.splice(index, 1);
  res.send("Deleted dish of index : " + index);
});

module.exports = router;
