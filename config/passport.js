// passport-config.js
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/User'); // Assuming you have a User model defined

const customFields = {
    usernameField: 'uname',
    passwordField: 'pw'
}

function verifyCallback(uname, pw, done) {
    User.findOne({ username: uname }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(pw)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

module.exports = passport;