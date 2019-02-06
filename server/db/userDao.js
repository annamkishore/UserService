const db = require('../db');
const errors = require('../errors');

const userCollection = 'user';

const addUser = async (user) => {
  let userDB = db.getUserDB();
  let userObj = await userDB.db().collection(userCollection).insertOne(user);
  return userObj;
};

const isUserExists = async (username) => {
  let userDB = db.getUserDB();
  let user = await userDB.db().collection(userCollection).findOne({username});
  return user;
};

const validateUser = async (username, password) => {
  let userDB = db.getUserDB();
  let user;
  try {
    user = await userDB.db().collection(userCollection).findOne({username, password});
  }catch (e) {
    throw e;
  }

  if(user) {
    return user;
  }else {
    throw new errors.InvalidCredentailsError('Invalid Credentials!');
  }
};

module.exports = {
  addUser,
  validateUser,
  isUserExists,
};
