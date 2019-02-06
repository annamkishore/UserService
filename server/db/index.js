const mongo = require('mongodb').MongoClient;
const config = require('../config');
const log = require('../logger');

let userDB;
const connectMongo = async () => {
  userDB = await mongo.connect(config.connectionString, {useNewUrlParser: true});
  log.info('User Service - Connected to Mongo DB');
};

module.exports.getUserDB = () => userDB;
module.exports.connectMongo = connectMongo;
