const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let newStr = [];

  if (!options.separator) options.separator = '+'
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (typeof str != 'string') str = String(str);
  if (typeof options.addition != 'string') options.addition = String(options.addition);

  for (let j = 0; j < options.additionRepeatTimes; j++){
    newStr.push(options.addition); 
  }
    let subStr = newStr.join(options.additionSeparator);
    newStr = [];

  for (let i = 0; i < options.repeatTimes; i++){
		newStr.push(str + subStr);
	}
  return newStr.join(options.separator);
};

module.exports = {
  repeater
};
