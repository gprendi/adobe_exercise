
class OutOfRangeError extends Error {
  constructor (message) {
    super(message);
    this.name = 'OutOfRangeError';
  }
}

class InvalidInputError extends Error {
  constructor (message) {
    super(message);
    this.name = 'InvalidInputError';
  }
}

class MissingParameterError extends Error {
  constructor (message) {
    super(message);
    this.name = 'MissingParameterError';
  }
}

module.exports = { OutOfRangeError, InvalidInputError, MissingParameterError };
