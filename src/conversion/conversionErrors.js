/**
 * OutOfRangeError extends Error
 * is thrown when the input is out of range
 * @memberof DecimalToRomanConversion
 */
class OutOfRangeError extends Error {
    /**
     * Initializes a new OutOfRangeError, using the supplied message;
     * @param {string} message is the supplied message to the error.
     */
    constructor (message) {
        super(message);
        this.name = 'OutOfRangeError';
    }
}

/**
 * InvalidInputError
 * is thrown when the input is not valid.
 * @memberof DecimalToRomanConversion
 */
class InvalidInputError extends Error {
    /**
     * Initializes a new InvalidError, using the supplied message;
     * @param {string} message is the supplied message to the error.
     */
    constructor (message) {
        super(message);
        this.name = 'InvalidInputError';
    }
}

/**
 * MissingParameterError
 * is thrown when the input is not provided.
 * @memberof DecimalToRomanConversion
 */
class MissingParameterError extends Error {
    /**
     * Initializes a new MissingParameterError, using the supplied message;
     * @param {string} message is the supplied message to the error.
     */
    constructor (message) {
        super(message);
        this.name = 'MissingParameterError';
    }
}

module.exports = { OutOfRangeError, InvalidInputError, MissingParameterError };
