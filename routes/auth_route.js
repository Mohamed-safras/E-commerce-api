const express = require("express");
const { createUser, signin } = require("../controller/user/user_controller");
const router = express.Router();

router.post("/register", createUser);

router.post("/signin", signin);

module.exports = router;
