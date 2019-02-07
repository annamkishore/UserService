const jwt = require('jsonwebtoken');
const log = require('../logger');
const userDao = require('../db/userDao');
const config = require('../config');
const emailService = require('./emailService');
const errors = require('../errors');

/**
 * login service:
 *        - validates user
 *        - generates and returns a JWT token if user credentials are valid
 *        - returns error message if user credentials are invalid
 *
 * @param username
 * @param password
 * @returns {Promise<*>}
 */
const login = async (username, password) => {
  log.debug('entered login() service');
  let user, token;
  try {
    user = await userDao.validateUser(username, password);
    log.info(`User ${username} login success`);
    token = jwt.sign({username}, config.secret, {expiresIn: '2h'});
  } catch (e) {
    log.warn(`User ${username} login failed`);
    return {message: e instanceof errors.InvalidCredentailsError ? e.message : e};
  }

  return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
    }
  };
};

async function register(user) {
  log.debug('entered register() service');
  let userFound = await userDao.isUserExists(user.username);
  if (userFound) {
    let message = `username - ${user.username}, already exists`;
    log.debug(message);
    return {
      errorMessage: message
    }
  } else {
    userDao.addUser(user);
    emailService.sendMail(user.email);
    log.info(`User: ${user.username}, registered, also sent verification email`);
    return {
      message: "A verification mail has been sent to your registered mail."
    }
  }
}

module.exports = {
  login,
  register,
};
