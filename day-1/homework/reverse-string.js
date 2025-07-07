// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/* 
I - Function should take a string
O - Output should reverse the spelling of that string 
C - Use a loop that can iterate through a string
E - n/a
*/

function reverseString(input) {
  // YOUR CODE GOES BELOW HERE //
  // make a storage variable 
  let backwards = "";
  // use a for...of loop because it can iterate through a sting 
  // remember var stands for the index of the string
  for(var i of input){
    backwards = i + backwards; // adding the string index to the backwards string
  }
  return backwards; 
  // YOUR CODE GOES ABOVE HERE //
}
// invoke and call the function 
console.log(reverseString("hello"));




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
