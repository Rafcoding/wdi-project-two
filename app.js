const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const router = require('./config/routes');
const port = 4000;
// Set up to use EJS

app.set('view engine', 'ejs'); // Means we don't need the .ejs extension on view files
app.use(ejsLayouts);
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Method override
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost/all-sneakers');

// Logging middleware
app.use('*', function(req, res, next) {
  console.log('Incoming request', req.method, req.originalUrl);
  next();
});

app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
