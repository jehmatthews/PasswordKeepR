/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
// const db = require('../db/connection');
const addPasswordToDatabase = require('../db/queries/insert_password_username_website')

router.get('/new', (req, res) => {
  addPasswordToDatabase.addNewPassword()
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
