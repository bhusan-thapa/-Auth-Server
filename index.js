const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const keys = require('./config/key');
const app = express();
mongoose.connect(keys.mongoURI, err => {
  if (err) {
    return console.log('cant connect to dbase');
  }
  console.log('Connected to database');
});
app.use(morgan('combined'));
app.use(bodyParser.json({ text: '*/*' }));
require('./router')(app);
const PORT = process.env.PORT || 3050;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
