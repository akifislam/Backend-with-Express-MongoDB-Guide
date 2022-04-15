const express = require("express");
const router = express.Router();

leaders = ["Akif", "Sagor", "Eram", "Farjana", "Adrita", "Sami", "Chaity"];

router.get("/", (req, res) => {
  res.send(leaders);
});

router.get("/:leaderID", (req, res) => {
  const index = req.params.leaderID;
  res.send(leaders[index]);
});

router.post("/", (req, res) => {
  const new_leader = req.body.name;
  leaders.push(new_leader);
  res.send("Added new leader :" + new_leader);
});

router.put("/:leaderID", (req, res) => {
  const index = req.params.leaderID;
  leaders[index] = req.body.name;
  res.send("Updated leader of index : " + index);
});

router.delete("/", (req, res) => {
  leaders = [];
  res.send("Deleted all leaders :( ");
});

router.delete("/:leaderID", (req, res) => {
  const index = req.params.leaderID;
  leaders.splice(index, 1);
  res.send("Deleted leader of index : " + index);
});

module.exports = router;
