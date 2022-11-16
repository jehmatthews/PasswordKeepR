const generateRandomStringStandard = require('../public/scripts/password-generator-standard');
const generateRandomStringSpecial = require('../public/scripts/password-generator-special');
const generateRandomStringUpper = require('../public/scripts/password-generator-upper');
const generateRandomStringAll = require('../public/scripts/password-generator-all');

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

  router.post('/password/create', (req, res) => {
    console.log(req.body.websiteName)
    console.log(req.body.category)
    console.log(req.body.url);
    console.log(req.body.username);
    if (req.body.specialChar === 'true') {
      console.log(generateRandomStringSpecial(req.body.passwordLength));
    } else if (req.body.upperCase === 'true') {
      console.log(generateRandomStringUpper(req.body.passwordLength));
    } else if (req.body.allChar === 'true'){
      console.log(generateRandomStringAll(req.body.passwordLength));
    } else (console.log(generateRandomStringStandard(req.body.passwordLength)));

    res.redirect('/passwords')
  });


}
