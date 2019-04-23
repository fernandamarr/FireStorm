const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Player = require("../models/player");
const settings = require("../config/settings");

module.exports = function(passport)  {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      Player.findOne({ id: jwt_payload.id}, function(err, player) {
        if (err) {
          return done(err, false);
        }
        if(player) {
          done(null, player);
        } else {
          done(null, false);
        }
      });
    })
  );
};