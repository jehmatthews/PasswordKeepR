const GetPasswordFromDatabase = require('../db/queries/getPassword')
const deletePassword = require('../db/queries/delete_passwords')

module.exports = function(router) {
  router.get('/', (req, res) => {
    res.redirect('/login');
  });

  router.get('/login', (req, res) => {

    res.render('login');
  });

  router.get('/passwords', (req, res) => {
    res.render('passwords')
  });

  router.get('/passwords/new', (req, res) => {
    res.render('create-password')
  });

  router.get('/passwords/:id', (req, res) =>{
    const { id } = req.params;
    const password = GetPasswordFromDatabase.getPasswordForEdit(id)
    .then((currentPassword) => {
      const templateVars = {
        id,
        password: currentPassword.password
      }
      res.render('edit-password', templateVars)
    })
  })

  router.get('/passwords/:id/delete', (req, res) =>{
    const { id } = req.params;
    deletePassword(id)
    res.redirect('/passwords')
  })

  router.post('/passwords', (req, res) => {
    res.redirect('/passwords')
  });

  router.post('/login', (req, res) => {
    res.redirect('/passwords')
  });

  router.post('/passwords/new', (req, res) => {
    res.redirect('/passwords/new')
  });

  router.post('/logout', (req, res) => {
    res.redirect('/login')
  });




}
