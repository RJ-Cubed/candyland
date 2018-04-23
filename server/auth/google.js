const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models')
require('../../secrets')

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // Google will send back the token and profile
    function (token, refreshToken, profile, done) {
      console.log('profile ', profile);
      const info = {
        name: profile.displayName,
        email: profile.emails[0].value,
        username: profile.displayName,
        password: 'default password',
      };
      User.findOrCreate({
        where: {
          googleId: profile.id
        },
        defaults: info
      })
      .then(([currentUser]) => done(null, currentUser));
    })
  );

  // Google authentication and login
  router.get('/', passport.authenticate('google', { scope: 'email' }));

  // handle the callback after Google has authenticated the user
  router.get('/verify',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  );
}

module.exports = router;
