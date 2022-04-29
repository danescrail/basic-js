const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 2 ** disksNumber - 1;
  let time = Math.floor(count / (turnsSpeed / 60 / 60));
  let obj = { "turns": count, "seconds": time };
  return obj;
}

module.exports = {
  calculateHanoi
};
