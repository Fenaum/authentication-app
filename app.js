const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var passport = require("passport");
var crypto = require("crypto");
var routes = require("./routes");
const connection = require("./config/database");

const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

