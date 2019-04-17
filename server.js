const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3003;

// Define middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
    // serve static assets (usually on heroku)
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
}
    // add routes, both API and view
app.use(routes);
    
    // connect to Mongo DB
    // {useNewUrlParser} handles the depracation error we usually get when starting the react code with Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/firestormDB", {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


