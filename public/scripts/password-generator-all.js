const generateRandomStringAll = function(length) {
  let result           = '';
  let characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-+=';
  let charactersLength = characters.length;
  for (let i = 1; i <= length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = generateRandomStringAll;
