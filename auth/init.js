const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
var app = require('../index');

passport.use(new LocalStrategy(
  function(username, password, done) {
    findUser({ email: username }, function (err, user) {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false)
      }
      if (!user.verifyPassword(password)) {
        return done(null, false)
      }
      return done(null, user)
    })
  }
))
