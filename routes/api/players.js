const passport = require('passport');
const mongoose = require('mongoose');
const settings = require('../../config/settings');
require('../../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Player = require("../../models/player");

//get and extract JWT token.
getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

// Get game 
router.post('/game', passport.authenticate('jwt', {
    session: false
}), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Player.findOne({ email: req.player.email },
            function (err, players) {
                if (err) return next(err);
                res.json(players);
            });
    } else {
        return res.status(403).send({
            success: false,
            msg: 'Unauthorized.'
        });
    }
});

// Route for player sign up
router.post('/signup', function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: 'Please enter email and password.'
        });
    } else {
        let username = req.body.name;
        if (username.length <= 0) {
            username = "unknown warriors";
        }
        let newPlayer = new Player({
            name: username,
            email: req.body.email,
            password: req.body.password
        });
        // save the player
        newPlayer.save(function (err) {
            if (err) {
                return res.json({
                    success: false,
                    msg: 'Email already exists.'
                });
            }
            res.json({
                success: true,
                msg: 'Successfully created new player.'
            })
        });
    }
});

// Route for player login
router.post('/login', function (req, res) {
    console.log("LOG IN PLAYER ROUTE")
    Player.findOne({
        email: req.body.email
    }, function (err, player) {
        if (err) throw err;
        if (!player) {
            res.status(401).send({
                success: false,
                msg: 'Authentication failed. User not found.'
            });
        } else {
            // check if password matches
            player.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if player is found and password is right create a token
                    var token = jwt.sign(player.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        email: req.body.email
                    });
                } else {
                    res.status(401).send({
                        success: false,
                        msg: 'Authentication failed. Wrong password.'
                    });
                }
            });
        }
    });
});

// update routes for the player (courtesy of Thomas the great)
router.post('/update', function (req, res) {
    console.log("UPDATE PLAYER ROUTE");
    // console.log(req);
    // console.log("did the user exist?");
    Player.findOne({ email: req.body.email }, (err, doc) => {
        console.log(doc.score);
        if (req.body.theFinalScore > doc.score) {
            Player.findOneAndUpdate({ email: req.body.email }, { $set: { score: req.body.theFinalScore } }, { new: true }, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
                console.log(doc);
            });
        }
    });
});

// leader board route, descending highest score (courtesy of Thomas the great)

router.get('/leaderboard', function (req, res) {
    console.log("LEADERBOARD PLAYER ROUTE")
    //they aren't saving the name on account creation
    Player.find({},['name','email','score'],{sort:{
        score: -1 //Sort by Date Added DESC
    }}, function(err, players) {
        console.log(players);    
        res.send(players);  
      }).limit(10);

});

module.exports = router;