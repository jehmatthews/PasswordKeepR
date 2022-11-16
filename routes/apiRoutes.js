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

  router.get('/passwords/edit', (req, res) =>{
    res.render('edit-password')
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
