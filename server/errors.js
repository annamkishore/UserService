class UserAlreadyExistsError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, UserAlreadyExistsError);
  }
}

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
