const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const loginApi = require("./server/login/login.route");
const registerApi = require("./server/register/register.route");
const adminAddUser = require("./server/addUser/addUser.route");
const addGameRoutes = require("./server/addGame/addGame.route");
const voteRoutes = require("./server/vote/vote.route");

app.use(cors());
app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cookieParser());

app.use(loginApi);
app.use(registerApi);
app.use(adminAddUser);
app.use(addGameRoutes);
app.use(voteRoutes);

const dataBase = "mongodb+srv://u78marwatwaw:123@cluster0.gcpm3g1.mongodb.net/";

mongoose.connect(dataBase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`);
});
