// passport-config.js

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("./models/User"); // Assuming you have a User model defined

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function (username, password, done) {
      // Find the user with the given username
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        // If no user is found
        if (!user) {
          return done(null, false);
        }
        // Check if the password is correct
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        }); 
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
fr3t2rf  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
