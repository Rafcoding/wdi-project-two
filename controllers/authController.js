const User = require('../models/user');

function registerFormRoute(req, res, next) {
  res.render('auth/register');
  next();
}

function registerRoute(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      console.log('Created a user', user);
      res.redirect('/');
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function loginFormRoute(req, res) {
  res.render('auth/login');
}

function loginRoute(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user) {
        res.redirect('/register');
      } else {
        console.log('Logging in', user);
        req.session.userId = user._id;
        res.redirect('/sneakers');
      }
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function logoutRoute(req, res, next) {
  req.session.regenerate(function() {
    res.redirect('/');
    next();
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
