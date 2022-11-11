// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const generateRandomStringStandard = require('./public/scripts/password-generator-standard');
const generateRandomStringSpecial = require('./public/scripts/password-generator-special');
const generateRandomStringUpper = require('./public/scripts/password-generator-upper');
const generateRandomStringAll = require('./public/scripts/password-generator-all');


const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/passwords', (req, res) => {
  res.render('passwords')
});

app.get('/passwords/new', (req, res) => {
  res.render('create-password')
});

app.post('/passwords', (req, res) => {
  res.redirect('/passwords')
});

app.post('/login', (req, res) => {
  res.redirect('/passwords')
});

app.post('/passwords/new', (req, res) => {
  res.redirect('/passwords/new')
});

app.post('/logout', (req, res) => {
  res.redirect('/login')
});

app.post('/password/create', (req, res) => {
  console.log(req.body.url);
  console.log(req.body.username);
  if (req.body.specialChar === 'true') {
    console.log(generateRandomStringSpecial(req.body.passwordLength))
  } if (req.body.upperCase === 'true') {
    console.log(generateRandomStringUpper(req.body.passwordLength))
  }
  if (req.body.allChar === 'true'){
    console.log(generateRandomStringAll(req.body.passwordLength))
  } else (console.log(generateRandomStringStandard(req.body.passwordLength)))

  res.redirect('/passwords')
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
