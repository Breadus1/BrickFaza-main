const express = require("express");
const router = express.Router();
const registerService = require("./service/register");

router.post("/api/admin/addUser", registerService.registerUser);
module.exports = router;
