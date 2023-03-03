const express = require("express");
const {
  createUser,
  signin,
  updateUser,
} = require("../controller/user/user_controller");
const { upload } = require("../middleware/upload");
const requireAuthent = require("../middleware/requireAuth");
const router = express.Router();

router.post("/register", upload.single("avatar"), createUser);

router.post("/signin", signin);

router.put("/update", updateUser);

module.exports = router;
