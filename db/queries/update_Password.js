const db = require('../connection');

const updatePassword = (password, id) => {
  return db.query(`UPDATE passwords SET password = $1 WHERE id = $2`,
  [`${password}`, id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = updatePassword;
