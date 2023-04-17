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
  maxdepth=1;
  depth=1;
  calculateDepth( arr ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    /*for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        this.depth++;
        
        if(this.depth>this.maxdepth) this.maxdepth=this.depth;
        this.calculateDepth(arr[i]);
      }
    }
    if(this.depth>this.maxdepth) this.maxdepth=this.depth;
    this.depth--;
    return this.maxdepth;*/
  }
}
module.exports = {
  DepthCalculator
};
