const {
  NotImplementedError
} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && /[0-9]/.test(sampleActivity) && !isNaN(sampleActivity)) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k;
    if (Math.ceil(t) < 0) {
      throw new NotImplementedError('Not implemented');
    } else {
      return Math.ceil(t);
    }
  } else {
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  dateSample
};