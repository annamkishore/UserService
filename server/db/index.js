const mongo = require('mongodb').MongoClient;
const config = require('../config');
const log = require('../logger');

/**
 * Connection logic goes here: for MongoDB
 */

let userDB;
const connectMongo = async () => {
  userDB = await mongo.connect(config.connectionString, {useNewUrlParser: true});
  log.info('User Service - Connected to Mongo DB');
};

module.exports.getUserDB = () => userDB;
module.exports.connectMongo = connectMongo;
