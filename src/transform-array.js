const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * 
 * 
 * --discard-next excludes the next element of the array from the transformed array.
   --discard-prev excludes the previous element of the array from the transformed array.
   --double-next duplicates the next element of the array in the transformed array.
   --double-prev
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
   transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--double-next") {
        arr[i] = arr[i + 1];
      } else if (arr[i] === "--double-prev" && i !== 0 && arr[i - 1] !== "--double-prev") {
        arr[i] = arr[i - 1];
      } else if (arr[i] === "--discard-prev" && i !== 0) {
        arr.splice(arr[i - 2], 2);
      } else if (arr[i] === "--discard-next" && i === arr.length - 1) {
        arr.splice(arr[i - 1], 2);
      } else if (arr[i] === "--double-prev" && i === 0) {
        arr.shift();
      } else if (arr[i] === "--discard-prev" && i === 0) {
        arr.shift();
      } else if (arr[i] === "--discard-next" && i === arr.length - 1) {
        arr.pop();
      }
    }

    return arr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

// удаляет значение 3 из массива 
// let numbers = [1,2,3,4];
// i = numbers.indexOf(3);
// if(i >= 0) {
//    numbers.splice(i,1);
// }
// console.log(numbers); // [1,2,4]

module.exports = {
  transform
};