const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let mail = "";
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === "@") {
      break;
    } else {
      mail += str[i];
    }
  }
  let result = mail.split('').reverse().join('');

  return result;
}
module.exports = {
  getEmailDomain
};