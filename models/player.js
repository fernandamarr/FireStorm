const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const playerSchema = new Schema ({
    name: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

playerSchema.pre('save', function(next) {
    let player = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if(err) {
                return next(err);
            }
            bcrypt.hash(player.password, salt, null, (err, hash) => {
                if(err) {
                    return next(err);
                }
                player.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

playerSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;