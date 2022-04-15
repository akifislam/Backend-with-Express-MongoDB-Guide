const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());

const Leaders = require("../models/leadersSchema");

router.get("/", async (req, res) => {
  const leaderslist = await Leaders.find();
  res.send(leaderslist);
});

router.get("/:leaderID", async (req, res) => {
  const leader = await Leaders.findById(req.params.leaderID);
  res.send(leader);
});

router.post("/", async (req, res) => {
  const new_leader = new Leaders(req.body);
  await new_leader.save();
  res.send("Added new leader :" + new_leader);
});

router.put("/:leaderID", async (req, res) => {
  await Leaders.findByIdAndUpdate(req.params.leaderID, req.body);
  res.send("Updated leader of ID : " + req.params.leaderID);
});

router.delete("/", async (req, res) => {
  await Leaders.remove({});
  res.send("Deleted all Leaders :( ");
});

router.delete("/:leaderID", async (req, res) => {
  await Leaders.findByIdAndDelete(req.params.leaderID);
  res.send("Deleted leader of index : " + index);
});

module.exports = router;
