// establish the connection to the database
const db = require('../connection');

// function that uses a query and promises to insert into the database
const addNewPassword = function(password) {
  db.query(`INSERT INTO passwords (websiteName, category, urlName, username)
  VALUES ($1, $2, $3, $4) RETURNING *`, [password.websiteName, password.category, password.urlName, password.username])
  .then((results) => {
    return console.log(results.rows)
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { addNewPassword };
