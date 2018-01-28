const passportService = require('./services/passport');
const Auth = require('./controllers/auth');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send('hello');
  });
  app.post('/signin', requireSignin, Auth.signin);
  app.post('/signup', Auth.signup);
};
