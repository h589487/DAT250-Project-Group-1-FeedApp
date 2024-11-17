// routers/pollRouter.js
const express = require("express");
const router = express.Router();
const PollController = require("../controllers/pollController");
const cors = require("cors");

// CORS-støtte for http://localhost:5173
router.use(cors({ origin: "http://localhost:5173" })); // Frontend kjører her?

// Definer ruter og koble dem til kontrolleren
router.get("/", (req, res) => PollController.getPolls(req, res));
router.post("/", (req, res) => PollController.createPoll(req, res));
router.post("/vote/:voteOptionId", (req, res) =>
  PollController.incrementVoteCount(req, res)
);
router.delete("/", (req, res) => PollController.deleteAllPolls(req, res));

module.exports = router;
