const db = require('../connection');

const getPasswordForEdit = function(){
  return db.query(`SELECT passwords.password
  FROM passwords
  WHERE passwords.id = $1`, [id] )
  .then((results) => {
    return results.rows
  })
};

module.exports = { getPasswordForEdit };
