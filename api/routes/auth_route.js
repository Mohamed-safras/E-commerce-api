const express = require("express");
const { createUser, signin } = require("../controller/user/user_controller");
const { upload } = require("../middleware/upload");
const router = express.Router();

router.post("/register", upload.single("avatar"), createUser);

router.post("/signin", signin);

module.exports = router;
