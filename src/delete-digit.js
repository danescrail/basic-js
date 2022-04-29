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
  let count = 0;
  let string = String(n)
  let matrix = [];
  let number = "";

  for (let i = 0; i < string.length; i++){
    let arr = String(n).split("");
    arr.splice(i, 1);
    matrix.push(arr);
  }

  for (let arr of matrix){
    number = "";
    for (let elem of arr){
      number += elem;
      if (count < number){
        count = number;
      }
    }
  }

  return Number(count);
}

module.exports = {
  deleteDigit
};
