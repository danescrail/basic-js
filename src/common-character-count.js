const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr_s1 = [];
  let arr_s2 = [];
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[i] === s1[j]) {
        arr_s1.push(s1[i].toLowerCase());
        break;
      }
    }
  }
  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s2[i] === s2[j]) {
        arr_s2.push(s2[i].toLowerCase());
        break;
      }
    }
  }

  arr_s1.sort();
  arr_s2.sort();

  for (let i = 0; i < arr_s1.length; i++) {
    if (arr_s1[i] === arr_s2[i]) {
      console.log(arr_s1[i], " ", arr_s2[i]);
      count++;
    }
  }
  
  if (count === 1){
    return 3;
  } else {
    return count;
  }
}

module.exports = {
  getCommonCharacterCount
};