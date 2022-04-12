class InvalidParamsError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidParamsError';
  }
}

class NotAuthorizedError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'NotAuthorizedError';
  }
}

class DuplicateError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'DuplicateError';
  }
}

module.exports = {InvalidParamsError, NotAuthorizedError, DuplicateError};
