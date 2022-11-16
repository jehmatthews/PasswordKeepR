// establish the connection to the database
const db = require('../connection');

// function that uses a query and promises to insert into the database
const addNewPassword = function(password, ranString) {
  return db.query(`INSERT INTO passwords (websiteName, category, urlName, username, password, organization_id)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [password.websiteName, password.category, password.url, password.username, ranString, 1])
  .then((results) => {
    return results.rows
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { addNewPassword };
