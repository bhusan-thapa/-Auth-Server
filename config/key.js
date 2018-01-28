if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pro_key');
} else {
  module.exports = require('./keys');
}
