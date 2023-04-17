const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let error1='Invalid date!',error2='Unable to determine the time of year!';
  let date=arguments[0];
  if(date===undefined) return (error2);
  if (typeof date!='object') throw new Error(error1);
  let fake=Object.getOwnPropertyNames(date);
  if((fake instanceof Date) || (isNaN(fake.valueOf()))) throw new Error(error1);
  const seasons=['winter','summer','autumn','spring']
  let month=date.getMonth();
  if(month==0 || month ==1 || month ==11) return seasons[0];
  if(month==4 || month ==2 || month ==3) return seasons[3];
  if(month==7 || month ==5 || month ==6) return seasons[1];
  if(month==10 || month ==8 || month ==9) return seasons[2];
  throw new Error(error1);
}

module.exports = {
  getSeason
};
