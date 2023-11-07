const router = require("express").Router();
const {
  userRegistration,
  userLogin,
  userLogout,
} = require("../controllers/authController");

// Define your routes here
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/logout", userLogout);

module.exports = router;
