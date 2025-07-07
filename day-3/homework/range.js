// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
  // YOUR CODE GOES BELOW HERE //
  // lets start with a storage for the new array
  let newRange = [];
  // if else statements can give us the results for two options
  // if start is less than or equal to end
  if(start <= end){
    // but you want a counter to add up to the end parameter
    for(var i = start; i <= end; i++) {
      // push that number to the array
    newRange.push(i);
    }
    // now for the reverse
  } else {
    // found out you can do a loop as the code block 
    // do the same but reverse 
    for(var i = start; i >= end ; i--){
    newRange.push(i);
  }
  }
  // make sure to return the array
  return newRange;
  // YOUR CODE GOES ABOVE HERE //
}
// invoke the function
console.log(range(5, 10));

console.log(range(20, 10));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
