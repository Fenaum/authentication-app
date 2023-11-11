// .ENV CONFIG
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
console.log(secretKey)

//import packages
const express = require("express");
const passport = require("./config/passport"); // Your passport configuration
const session = require("express-session");
const MongoStore = require("connect-mongo");
const routes = require("./routes/auth.js");
const mongoose = require("mongoose");
const cors = require('cors')


// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/authenticator", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });


const app = express();

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express cors
app.use(cors());

// Express session
app.use(
  session({
    secret: secretKey, // Replace 'secret' with your own secret key
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/authenticator",
    }), // Use MongoStore and pass the mongoose connection
    cookie: {
      maxAge: 1000 * 60 * 10, // 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 14 days
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", routes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
