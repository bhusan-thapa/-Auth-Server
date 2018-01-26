const passport = require('passport');
const User = require('../models/user');
const keys = require('../config/keys');
const Jwtstrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
