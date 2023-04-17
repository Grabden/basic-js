const { NotImplementedError } = require('../extensions/index.js');

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
function dateSample(/* sampleActivity */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let A=arguments[0];
  if(typeof A!='string') return false;
  
  A=+A;
  if(A>15)return false;
  if(A<=0) return false;
  if(A==undefined) return false;
  if(A=='') return false;
  if(isNaN(A)) return false;
  let time=(Math.log(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/Math.log(2);
  time=Math.ceil(time);
  return time;
}

module.exports = {
  dateSample
};
