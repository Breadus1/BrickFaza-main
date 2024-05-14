const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  image: String,
  website: String,
  type: String,
  releaseDate: Date,
  description: String,
  votes: {
    type: Number,
    default: 0
  }
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
