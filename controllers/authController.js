const bcrypt = require("../utils/passwordUtils");
const User = require("../models/User.js"); // Assuming you have a User model

const authController = {
  async userRegistration(req, res) {
    const { username, password } = req.body;

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    try {
      // Hash the password
      const hash = await bcrypt.hash(password, 10);

      console.log("Hashed Password:", hash); // Add this line to log the hashed password

      // Create new user
      const user = await User.create({ username, password: hash });

      console.log("Created User:", user); // Add this line to log the created user

      // Automatically log the user in after registration
      req.login(user, (err) => {
        if (err) {
          console.error("Login Error:", err); // Add this line to log login errors
          return res
            .status(500)
            .json({ error: "Error logging in after registration" });
        }

        return res
          .status(200)
          .json({ message: "User registration successful" });
      });
    } catch (err) {
      console.error("Registration Error:", err); // Add this line to log registration errors
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
