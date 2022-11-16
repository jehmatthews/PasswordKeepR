// when we delete we want to delete where id

const db = require('../connection');

const deletePassword = function() {
  return db.query
  .query(`DELETE FROM passwords
  WHERE id = $1`, [req.params.id])
  .then(data =>  {
    return data.rows
  });
}

module.exports = { deletePassword }


// user will click delete button
// client will make a request to the server to delete this query
// server will run this function which will make a req to the database
// database runs the query and will send back a res to the server
// server will send the res to the client (fail or success)
