const express = require("express");
const passport = require("./config/passport"); // Your passport configuration
const session = require("express-session");
const routes = require('./routes/auth.js')
const mongoose = require('mongoose')

const app = express();

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: "secret", // Replace 'secret' with your own secret key
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', routes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));