const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());

const Dishes = require("../models/dishesSchema");

router.get("/", async (req, res) => {
  const disheslist = await Dishes.find();
  res.send(disheslist);
});

router.get("/:dishID", async (req, res) => {
  const dish = await Dishes.findById(req.params.dishID);
  res.send(dish);
});

router.post("/", async (req, res) => {
  const new_dish = new Dishes(req.body);
  await new_dish.save();
  res.send("Added new dish :" + new_dish);
});

router.put("/:dishID", async (req, res) => {
  await Dishes.findByIdAndUpdate(req.params.dishID, req.body);
  res.send("Updated dish of ID : " + req.params.dishID);
});

router.delete("/", async (req, res) => {
  await Dishes.remove({});
  res.send("Deleted all dishes :( ");
});

router.delete("/:dishID", async (req, res) => {
  await Dishes.findByIdAndDelete(req.params.dishID);
  res.send("Deleted dish of index : " + index);
});

module.exports = router;
