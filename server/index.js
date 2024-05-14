const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const addUserRoute = require("./addUser/addUser.route");
const loginRoute = require("./login/login.route");
const addGameRoute = require("./addGame/addGame.route");
const voteRoute = require("./vote/vote.route");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/mongodb+srv://u78marwatwaw:123@cluster0.gcpm3g1.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

app.use("/api", addUserRoute);
app.use("/api", loginRoute);
app.use("/api", addGameRoute);
app.use("/api", voteRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
