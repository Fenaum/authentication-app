const express = require("express");
const passport = require("passport");
const session = require("express-session");
// Other imports...

const app = express();

// Configure session store
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: 'mongodb://localhost:27017/your-database',
      collection: 'sessions' // Collection name to store sessions
    })
  })
);

// Other middleware and routes...


const port = process.env.PORT || 3000; // Choose your desired port number.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
