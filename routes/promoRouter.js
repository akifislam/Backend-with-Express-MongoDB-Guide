const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());

const Promotions = require("../models/promotionsSchema");

router.get("/", async (req, res) => {
  const Promotionslist = await Promotions.find();
  res.send(Promotionslist);
});

router.get("/:promotionID", async (req, res) => {
  const promotion = await Promotions.findById(req.params.promotionID);
  res.send(promotion);
});

router.post("/", async (req, res) => {
  const new_promotion = new Promotions(req.body);
  await new_promotion.save();
  res.send("Added new promotion :" + new_promotion);
});

router.put("/:promotionID", async (req, res) => {
  await Promotions.findByIdAndUpdate(req.params.promotionID, req.body);
  res.send("Updated promotion of ID : " + req.params.promotionID);
});

router.delete("/", async (req, res) => {
  await Promotions.remove({});
  res.send("Deleted all Promotions :( ");
});

router.delete("/:promotionID", async (req, res) => {
  await Promotions.findByIdAndDelete(req.params.promotionID);
  res.send("Deleted promotion of index : " + index);
});

module.exports = router;
