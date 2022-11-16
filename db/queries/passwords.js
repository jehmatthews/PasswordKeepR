// select * passwords that equal that organization id

const db = require('../connection');

const getPasswordsForOrganization = () => {
  return db.query(`SELECT passwords.id as password_id, passwords.websiteName as websiteName, passwords.category, passwords.urlName, passwords.username, passwords.password
  FROM passwords
  JOIN organizations ON passwords.organization_id = organizations.id
  WHERE organization_id = 1`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPasswordsForOrganization };

