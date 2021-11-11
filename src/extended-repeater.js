import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let array = [];
  let i = 0;
  do {
    array.push(String(str));
    i++;
  } while (i < options.repeatTimes);

  let additions = [];
  if ('addition' in options) {
    let j = 0;
    do {
      additions.push(String(options.addition));
      j++;
    } while (j < options.additionRepeatTimes);
  }
  
  const add = 'additionSeparator' in options ? 
    additions.join(options.additionSeparator) : 
    additions.join('|');

  const new_array = array.map( item => item + add);
 
  return 'separator' in options ? 
    new_array.join(options.separator) : 
    new_array.join('+');
}
