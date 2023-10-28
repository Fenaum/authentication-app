// Import necessary modules
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");

// Create an Express application
const app = express();

// Connect to your MongoDB database
mongoose
  .connect("mongodb://localhost/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Set up session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and use it to manage sessions
app.use(passport.initialize());
app.use(passport.session());

// Import your Passport configuration
require("./passport-config")(passport);

// Set up a simple home route
app.get("/", (req, res) => {
  res.send("Home page");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
