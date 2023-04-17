const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newarr=[],num=-1;;
  if(Array.isArray(arr)==false) throw new Error("'arr' parameter must be an instance of the Array!");
  let trans=['--discard-next','--discard-prev','--double-next','--double-prev'];
  
  for(let i=0;i<arr.length;i++){
    if((arr[0]==trans[1] || arr[0]==trans[3]) && (i==0))
      i++;
    if(( arr[arr.length-1]==trans[0] || arr[arr.length-1]==trans[2]) && i==arr.length-1)
    return newarr;
    if(arr[i]==trans[0]) {
      num=i+1;
      i++;
    }
    else if(arr[i+1]==trans[1]) {

      i=i+1;
    }
    else if(arr[i]==trans[1]){continue;}
    else if(arr[i]==trans[2]) {newarr.push(arr[i+1]);}
    else if(arr[i]==trans[3]) {
      if(num!=i-1) 
        newarr.push(arr[i-1]);
      num=i-1;
    }
    else newarr.push(arr[i]);
}
  return newarr;
}

module.exports = {
  transform
};
