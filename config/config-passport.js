const passport = require("passport");
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
    {
      usernameField: "username",
      passReqToCallback: true
    },
    (req, username, password, done) => {
      Users.findOne({ username })
        .then(user => {
          if (!user) {
            return done(null, false); //req.flash("message", "Incorrect password")
          }
          if (!user.validPassword(password)) {
            return done(
              null,
              false
              //req.flash("message", "Incorrect password")
            );
          }
          //Место для сериализации польлзовательских данных <<<<<===
          return done(null, user);
        })
        .catch(err => done(err));
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
