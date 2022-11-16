/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const orgPasswords = require('../db/queries/passwords');

router.get('/passwords', (req, res) => {
  orgPasswords.getPasswordsForOrganization()
    .then(passwords => {
      res.json(passwords);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;


