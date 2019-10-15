const passport = require("passport");
const { validCrypto } = require("../lib/crypto");
//const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
//require("../models/schema");
//const User = mongoose.model("user");
const { Users } = require("../models/schema/user");
const secret = require("./config.json").secret;

//const ExtractJWT = passportJWT.ExtractJwt;
//const Strategy = passportJWT.Strategy;

/* const params = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}; */

passport.use(
  new LocalStrategy(
    { usernameField: "username", passReqToCallback: true },
    (req, username, password, done) => {
      try {
        const user = Users.findOne({ username });
        if (!user) {
          return done(null, false);
        }

        if (user.password !== validCrypto(password)) {
          return done(null, false);
        }

        const { password, ...serialized } = user; //Место для сериализации польлзовательских данных <<<<<===
        return done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);

/* passport.use(
  new Strategy(params, function(payload, done) {
    console.log(payload);
    User.find({ id: payload.id })
      .then(user => {
        if (!user) {
          return done(new Error("User not found"));
        }
        return done(null, { id: user.id });
      })
      .catch(err => done(err));
  })
);
 */
