const express = require("express");
const router = express.Router();
const Game = require("../models/game");

router.post("/vote/:id", async (req, res) => {
  try {
    const gameId = req.params.id;
    const game = await Game.findById(gameId);
    if (game) {
      game.votes += 1;
      await game.save();
      res.status(200).json({ success: true, game });
    } else {
      res.status(404).json({ success: false, message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
