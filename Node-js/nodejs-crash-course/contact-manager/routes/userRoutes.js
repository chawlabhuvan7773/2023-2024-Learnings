const express = require("express");
const {
  loginUser,
  registerUser,
  currentUser,
} = require("../controllers/UserController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/current", validateToken, currentUser);

module.exports = router;
