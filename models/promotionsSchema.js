const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  image: String,
  label: String,
  description: String,
  featured: Boolean,
});

const Promotions = mongoose.model("Promotions", schema);
module.exports = Promotions;
