// when we delete we want to delete where id

const db = require('../connection');

const deletePassword = function(password) {
  pool
  return db.query(`DELETE password.id FROM passwords
  WHERE password.id = $1`, [password])
  .then(data =>  {
    console.log(data.rows)
  });
}

module.exports = { deletePassword }
