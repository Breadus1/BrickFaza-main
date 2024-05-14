const express = require("express");
const router = express.Router();
const addUserService = require("./service/addUser");

router.post("/admin/adduser", addUserService.addUser);

module.exports = router;
