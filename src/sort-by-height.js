const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {} else {
      positions.push(arr[i]);
      arr[i] = undefined;
    }
  }

  positions.sort(function(a, b) {
    return a - b;
  });
  
  let pos = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === undefined){
      arr[i] = positions[pos];
      pos++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};