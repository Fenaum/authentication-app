const express = require("express");
const passport = require("./config/passport"); // Your passport configuration
const session = require("express-session");
const MongoStore = require("connect-mongo");
const routes = require("./routes/auth.js");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost/authenticator", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session
app.use(
  session({
    secret: "secret", // Replace 'secret' with your own secret key
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/authenticator" }), // Use MongoStore and pass the mongoose connection
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", routes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
