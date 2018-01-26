const jwt = require('jwt-simple');
const keys = require('../config/keys');
const User = require('../models/user');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.secret);
}

exports.signup = function(req, res, next) {
  // Get email and password
  const { email, password } = req.body;
  //verify if both email and password is provided
  if (!email || !password) {
    return res.status(422).send({ err: 'Both email and password is requied' });
  }
  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return res.status.send({ err: 'There is an error in dbase server' });
    }
    if (existingUser) {
      return res.status(422).send({ err: 'Email is already in user' });
    }
    const user = User({
      email,
      password
    });
    user.save(err => {
      if (err) {
        return res.status(422).send(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
};
