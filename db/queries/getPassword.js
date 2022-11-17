const db = require('../connection');

const getPasswordForEdit = function(id){
  return db.query(`SELECT passwords.*
  FROM passwords
  WHERE passwords.id = $1`, [id] )
  .then((results) => {
    console.log('results', results.rows)
    return results.rows[0]
  })
};

module.exports = { getPasswordForEdit };
