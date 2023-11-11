const bcrypt = require("../utils/passwordUtils");
const User = require("../models/User.js"); // Assuming you have a User model
const passport = require('../config/passport.js')

const authController = {
  async userRegistration(req, res) {
    const { username, password, email } = req.body;
    
    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    try {
      // Hash the password
      const hash = await bcrypt.hash(password, 10);

      // Create new user
      const user = await User.create({ username, password: hash, email });

      // Automatically log the user in after registration
      req.login(user, (err) => {
        if (err) {
          console.error("Login Error:", err);
          return res
            .status(500)
            .json({ error: "Error logging in after registration" });
        }

        return res
          .status(200)
          .json({ message: "User registration successful" });
      });
    } catch (err) {
      console.error("Registration Error:", err);
      return res.status(500).json({ error: "Error creating new user" });
    }
  },

  userLogin(req, res, next) {
    // Use Passport's local authentication strategy
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ error: "Error during login" });
      }
      if (!user) {
        return info.message === 'Missing credentials' ? res.status(400).json({ error: 'Please provide your credentials' }) : res.status(401).json({ error: info.message })
      }

      // Log in the user
      req.login(user, (err) => {
        if (err) {
          console.error("Login Error:", err);
          return res.status(500).json({ error: "Error during login" });
        }
        return res.status(200).json({ message: "User login successful" });
      });
    })(req, res, next); // Invoking the middleware
  },

  userLogout(req, res) {
    req.logout();
    return res.status(200).json({ message: "User logout successful" });
  },
};

module.exports = authController;
