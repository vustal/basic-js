import { NotImplementedError } from '../extensions/index.js';

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
export default function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity === 'string') {
    if (isNaN(Number(sampleActivity)) || 
        (Number(sampleActivity) < 0) ||
        (Number(sampleActivity) > 15) ||
        !isFinite(Number(sampleActivity))) return false;

    let rate_constant = 0.693 / HALF_LIFE_PERIOD;
    let result = Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / rate_constant);

    if (result === Infinity) return false;
    
    return result;
  }
  
  return false;


}
