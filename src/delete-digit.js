const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let array = n.toString().split('');
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    let number = array.slice();
    number.splice(i, 1);
    numbers[i] = number.join('');
  }
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
