const Auth = require('./controllers/auth');
module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('Hello ');
  });
  app.post('/signup', Auth.signup);
};
