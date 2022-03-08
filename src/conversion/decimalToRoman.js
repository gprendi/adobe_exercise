const { OutOfRangeError, InvalidInputError, MissingParameterError } = require('./conversionErrors');

// TODO refactor with custom errors
// TODO documentation
function decimalToRoman (num) {
  function toRoman (number) {
    let roman = '';

    const num = [1, 4, 5, 9, 10, 40, 50, 90, 100];
    const sym = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C'];

    // start from the last one, and work backwards
    let i = 8;
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
  if (num < 1 || num > 255) {
    throw new OutOfRangeError('Cannot convert number out of range 1-255');
  }

  return toRoman(num);
}

module.exports.decimalToRoman = decimalToRoman;
