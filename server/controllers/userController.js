const userService = require('../service/userService');
const log = require('../logger');

/**
 * login controller: To authenticate the user with the given username and password
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const login = async (req, res) => {
  log.debug('entered login() controller');
  let {username, password} = req.body;
  userService.login(username, password)
    .then(user => user.token ? res.json(user) :  res.status(400).json(user));
};

/**
 * register: To register a new user with the given information
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const register = async (req, res) => {
  log.debug('entered register() controller');
  let user = req.body;
  userService.register(user)
    .then(message => res.json(message));
};

module.exports = {
  login,
  register,
};
