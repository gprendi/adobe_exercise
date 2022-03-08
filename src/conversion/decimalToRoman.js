
// TODO refactor with custom errors
// TODO documentation
function decimalToRoman (num) {
  function toRoman (number) {
    let roman = ''

    const num = [1, 4, 5, 9, 10, 40, 50, 90, 100]
    const sym = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C']

    // start from the last one, and work backwards
    let i = 8
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

  if (num === undefined) throw new Error('Should be called with a parameter');
  if (typeof num !== 'number') throw new Error('Only numbers can be converted');

  // only positive numbers can be converted
  // imposing a limit on maximum value
  if (num < 1 || num > 255) throw new Error('Only positive integers between 1 and 255 can be converted.');

  return toRoman(num)
}

module.exports.decimalToRoman = decimalToRoman
