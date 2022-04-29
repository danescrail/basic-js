const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let result = [];
  let obj = {};
  let str = ".";

  for (let elem of arr){
    for (let i = 0; i < elem.length; i++){
      console.log(str);
      if (elem[i] === "."){
        result.push(str);
        str = ".";
      } else {
        str += elem[i];
      }
    }
  }
  console.log(result);
}

module.exports = {
  getDNSStats
};