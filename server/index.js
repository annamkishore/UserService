const app = require('express')();
const routes = require('./routes');
const config = require('./config');
const log = require('./logger');
const db = require('./db');
const bodyParser = require('body-parser');

/**
 * initServer: initialises the UserService Server
 *      - connects to MongoDB using connectionString defined in the config.js
 *      - listens to the port defined in the config.js
 *
 * @returns {Promise<void>}
 *
 * @throws an error:
 *      - if any caused while creating Database connection (or)
 *      - if any port number issues like port in use, port out of range, etc
 */
const initServer = async () => {
  app.use(bodyParser.json());
  app.use('/user', routes);
  try {
    await db.connectMongo();

    app.listen(config.port, () => {
      log.info(`Server started at port: ${config.port}`);
    });
  }catch (e) {
    log.error(e);
    process.exit(1);
  }
};

initServer();

module.exports = app;
