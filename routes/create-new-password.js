/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const addPasswordToDatabase = require('../db/queries/insert_password_username_website')
const generateRandomStringStandard = require('../public/scripts/password-generator-standard');
const generateRandomStringSpecial = require('../public/scripts/password-generator-special');
const generateRandomStringUpper = require('../public/scripts/password-generator-upper');
const generateRandomStringAll = require('../public/scripts/password-generator-all');

router.post('/create', (req, res) => {
  if (req.body.specialChar === 'true') {
    addPasswordToDatabase.addNewPassword(req.body, generateRandomStringSpecial(req.body.passwordLength))
  } else if (req.body.upperCase === 'true') {
    addPasswordToDatabase.addNewPassword(req.body, generateRandomStringUpper(req.body.passwordLength))
  } else if (req.body.allChar === 'true'){
    addPasswordToDatabase.addNewPassword(req.body, generateRandomStringAll(req.body.passwordLength))
  } else (
    addPasswordToDatabase.addNewPassword(req.body, generateRandomStringStandard(req.body.passwordLength))
  );

  res.redirect('/passwords')
});

module.exports = router;
