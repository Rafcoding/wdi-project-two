const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const auth = require('./lib/auth');
const environment = require('./config/environment');
const session = require('express-session');


const mongoose = require('mongoose');
const router = require('./config/routes');
const port = environment.port;
// Set up to use EJS

app.set('view engine', 'ejs'); // Means we don't need the .ejs extension on view files
app.use(ejsLayouts);
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Method override
app.use(methodOverride('_method'));

mongoose.connect(environment.dbUri);

app.use(session({
  secret: 'sneaky',
  resave: false,
  saveUninitialized: false
}));

// Logging middleware
app.use('*', function(req, res, next) {
  console.log('Incoming request', req.method, req.originalUrl);
  next();
});
app.use('*', auth.checkAuthStatus);
app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
