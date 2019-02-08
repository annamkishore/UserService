/**
 *
 * Configuration file for this application: UserService
 *
 * @type {{connectionString: string, logLevel: string, port: number, secret: string}}
 */
module.exports = {
  port: 3000,
  connectionString: 'mongodb://localhost:52061/userdb',
  secret: 'cloudengineertest',
  logLevel: 'debug',
};
