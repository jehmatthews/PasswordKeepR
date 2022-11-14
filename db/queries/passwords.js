// get a password for a specific site

// select * passwords that equal that organization id

const db = require('../connection');

const getPasswordsForOrganization = (password) => {
  return db.query(`SELECT * FROM passwords
  JOIN organization_id ON organizations(id)
  WHERE organization.id = $1`, [password])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPasswordsForOrganization };

//NOTES

// ON LOADING INTO THE USER PAGE:
// need to select the specific websiteName on for a specific
// box

// figure out how jquery can connect to a database
//AJAX CALLS
