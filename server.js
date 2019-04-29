const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const env = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3003;

// Define middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// serve static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to MongoDB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/firestorm";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});