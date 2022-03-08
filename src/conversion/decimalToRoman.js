/**
 * @namespace DecimalToRomanConversion
 */

const { OutOfRangeError,  InvalidInputError, MissingParameterError, InvalidRangeError } = require('./conversionErrors');

/**
   * Converts a decimal number to a roman numeral
   * @info https://en.wikipedia.org/wiki/Roman_numerals
   * @info modified version of a function found in geeksforgeeks.org
   * @param {Number} number an Integer between 1 and 3999
   * @returns the string representation of the number in roman numerals
   * @memberof DecimalToRomanConversion
   */
function toRomanSync (number) {
    let roman = '';

    const num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const sym = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // start from the last one, and work backwards
    let i = 12;
    while (number > 0) {
        let div = Math.floor(number / num[i]);
        number = number % num[i];
        while (div--) {
            roman += sym[i];
        }
        i--;
    }

    return roman;
}


/**
 * Converts a decimal number to a roman numeral, contains checks for valid input
 * @param {Number} num a number that is to be converted to roman numerals
 * @returns the string representation of the num in roman numerals
 * @throws {OutOfRangeError} if the number is outside of the range 1 - 3999
 * @throws {InvalidInputError} if the number is not an integer
 * @throws {MissingParameterError} if the number is not provided
 * @memberof DecimalToRomanConversion
 */
function decimalToRoman (num) {
    if (num === undefined) {
        throw new MissingParameterError('Cannot convert undefined to roman');
    }

    if (typeof num !== 'number') {
        throw new InvalidInputError('Cannot convert non-number to roman');
    }

    if (num - Math.ceil(num) !== 0) {
        throw new InvalidInputError('Cannot convert float to roman');
    }

    // only positive numbers can be converted
    // imposing a limit on maximum value
    if (num < 1 || num > 3999) {
        throw new OutOfRangeError('Cannot convert number out of range 1-3999');
    }

    return toRomanSync(num);
}

/**
 * Promise wrapper for toRomanSync
 * @param {Number} number a number that is to be converted to roman numerals
 * @returns a Promise that resolves to the string representation of the number in roman numerals
 */
function toRoman (number) {
    return new Promise((resolve) => {
        resolve(toRomanSync(number));
    });
}

/**
 * An asynchronous range generator, contains error checking for valid input
 * @param {*} min a Number
 * @param {*} max a Number
 * @returns a Promise that resolves to an array of roman numerals between min and max
 */
async function calculateRange (min, max) {
    if (min === undefined || max === undefined) {
        throw new MissingParameterError('Cannot convert undefined to roman');
    }

    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new InvalidInputError('Cannot convert non-number to roman');
    }

    if (min - Math.ceil(min) !== 0 || max - Math.ceil(max) !== 0) {
        throw new InvalidInputError('Cannot convert float to roman');
    }

    if (min > max) {
        throw new InvalidRangeError('Cannot convert range with min > max');
    }

    // only positive numbers can be converted
    // imposing a limit on maximum value
    if (min < 1 || max > 3999) {
        throw new OutOfRangeError('Cannot convert number out of range 1-3999');
    }


    const range = [];
    for (let i = min; i <= max; i++) {
        const rom = await toRoman(i);
        range.push({
            input: i,
            output: rom
        });
    }

    return range;
}

module.exports.decimalToRoman = decimalToRoman;
module.exports.calculateRange = calculateRange;
