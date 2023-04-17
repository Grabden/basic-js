const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(value);
    return this;
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if((position <1) || (position > this.arr.length) || (typeof position!='number')){
      this.arr=[];
      throw new Error("You can't remove incorrect link!");
    }
    let newarr=[];
    for(let i=0;i<this.arr.length;i++){
      if(i!=position-1)
        newarr.push(this.arr[i]);
    }
    this.arr=newarr;
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result='( '+this.arr[0]+' )';
    for(let i=1;i<this.arr.length;i++){
      result=result+'~~( '+this.arr[i]+' )';
    }
    this.arr=[];
    return result;
  }
};

module.exports = {
  chainMaker
};
