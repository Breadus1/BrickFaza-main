const express = require("express");
const router = express.Router();
const loginService = require("./service/login");

router.post("/login", loginService.Login);

module.exports = router;
