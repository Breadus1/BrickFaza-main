const express = require("express");
const router = express.Router();
const Game = require("../models/game");

router.post("/add-game", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json({ success: true, game: newGame });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
