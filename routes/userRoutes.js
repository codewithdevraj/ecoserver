const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userControllers");
const {
  validateRegistration,
  validateLogin,
} = require("../middleware/validation");

router
  .route('/')
  .get((req, res) => {
    res.send("Hello from server");
  })
router.post("/register", validateRegistration, registerUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;
