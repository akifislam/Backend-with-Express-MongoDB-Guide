const express = require("express");
const router = express.Router();

promos = ["1% Discout", "5% Discount", "Buy 4 Get 1", "20% Cashback on Bkash"];

router.get("/", (req, res) => {
  res.send(promos);
});

router.get("/:promoID", (req, res) => {
  const index = req.params.promoID;
  res.send(promos[index]);
});

router.post("/", (req, res) => {
  const new_promo = req.body.name;
  promos.push(new_promo);
  res.send("Added new promotions :" + new_promo);
});

router.put("/:promoID", (req, res) => {
  const index = req.params.promoID;
  promos[index] = req.body.name;
  res.send("Updated promotions of index : " + index);
});

router.delete("/", (req, res) => {
  promos = [];
  res.send("Deleted all promos :( ");
});

router.delete("/:promoID", (req, res) => {
  const index = req.params.promoID;
  promos.splice(index, 1);
  res.send("Deleted promotions of index : " + index);
});

module.exports = router;
