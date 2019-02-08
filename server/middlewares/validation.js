const Joi = require('joi');
const log = require('../logger');
const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Validations across the application goes here, using the Joi NPM Module
 */

const loginSchema = {
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
};

const registerSchema = {
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  firstname: Joi.string().min(2).max(30).required(),
  lastname: Joi.string().min(2).max(30).required(),
  email: Joi.string().email(),
};

function validateLogin(req, res, next) {
  let {username, password} = req.body;

  Joi.validate({username, password}, loginSchema, (err, value) => {
    err && log.error(err);
    err ? res.status(400).json({message: 'Invalid Login Input!'}) : next();
  });
}

function validateRegistration(req, res, next) {
  let user = req.body;

  Joi.validate(user, registerSchema, (err, value) => {
    err && log.error(err);
    err ? res.status(400).json({message: 'Invalid Registration Input!'}) : next();
  });
}

function validateToken(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
}

module.exports = {
  validateLogin,
  validateRegistration,
  validateToken
};
