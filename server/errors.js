/**
 *  This error is raised while registration if the user already exists with the given username
 */
class UserAlreadyExistsError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, UserAlreadyExistsError);
  }
}

/**
 *  This error is raised while login if provided username/password is invalid      -
 */
class InvalidCredentailsError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, InvalidCredentailsError);
  }
}

module.exports = {
  UserAlreadyExistsError,
  InvalidCredentailsError,
};
