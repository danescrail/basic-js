const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let json = JSON.stringify(arr);
    let count = 0;
    
    for (let i = 0; i < json.length; i++){
      if (json[i] === "]"){
        count++;
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
