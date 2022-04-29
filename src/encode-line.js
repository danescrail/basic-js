const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s1) {
  let arr_s1 = [];

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[i] === s1[j]) {
        arr_s1.push(s1[i]);
        break;
      }
    }
  }

  let str = "";
  let sum = 1;
  for (let i = 0; i < arr_s1.length; i++) {
    if (arr_s1[i] === arr_s1[i + 1]) {
      sum++;
      console.log(sum);
    } else {
      if (sum === 1) {
        str += arr_s1[i];
        console.log(arr_s1[i]);
      } else {
        console.log(arr_s1[i]);
        console.log(sum);
        str +=  sum + arr_s1[i];
        sum = 1;
      }
    }
  }
  return str;
}

module.exports = {
  encodeLine
};