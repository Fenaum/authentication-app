const bcrypt = require("../utils/passwordUtils");
const User = require('../models/User.js'); // Assuming you have a User model

const authController = {
  async userRegistration(req, res) {
    const { username, password } = req.body;

    try {
      // Hash the password
      const hash = await bcrypt.hash(password, 10);

      // Create new user
      const user = await User.create({ username, password: hash });

      // Automatically log the user in after registration
      req.login(user, (err) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Error logging in after registration" });
        }

        return res
          .status(200)
          .json({ message: "User registration successful" });
      });
    } catch (err) {
      return res.status(500).json({ error: "Error creating new user" });
    }
  },
    userLogin(req, res) {
    return res.status(200).json({ message: "User login successful" });
  },

    userLogout(req, res) {
    req.logout();
    return res.status(200).json({ message: "User logout successful" });
  },
};

module.exports = authController;
