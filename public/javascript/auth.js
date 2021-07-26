const express = require('express');
const passport = require('passport-local');
const router = require('express').Router();


LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function(username, password, done) {
    User.findOne({ username: username}, function(err, user) {
      if (err) { return done(err);}
      if (!user) {
        return done(null, false, { message: 'Incorrect email.'});
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true 
}));