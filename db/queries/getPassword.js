const db = require('../connection');

const getPasswordForEdit = function(id){
  return db.query(`SELECT passwords.*
  FROM passwords
  WHERE passwords.id = $1`, [id] )
  .then((results) => {
    return results.rows[0]
  })
};

module.exports = { getPasswordForEdit };
