const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    // first/last name to display as a start function
    // ex: Welcome (insert first/last name) to the game!
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},

    // email/password for passport (user verification)
    email: {type: String, require: true},
    password: {type: String, require: true},
    // just to date when they signed on/started playing
    date: {type: Date, default: Date.now}
});

const Player = mongoose.model("Player", playerSchema);

mondule.exports = Player;