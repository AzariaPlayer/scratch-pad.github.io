// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */
/*
I - Input nothing  
O - Output fizz for multiples of three , buzz for multiples of 5, and fizzbuzz of multiples of both
C - 
E - 
*/
function fizzBuzz() {
  // YOUR CODE GOES BELOW HERE //
  // maybe make a for loop
  // lets start with a counter starting at 1 and stopping at 100, increase by 1
for(var i = 1; i <= 100 ; i++){
  // Start by seeing i is a multiple of both 3 and 5 
  if(i % 3 === 0 && i % 5 === 0){
    // return FizzBuzz if true
    console.log("FizzBuzz");
  // check if i is a multiple of 3
  } else if ( i % 3 === 0){
    // return Fizz if true
    console.log("Fizz");
  // check if i is a multiple of 5
  } else if ( i % 5 === 0){
    // return Buzz if true 
    console.log("Buzz");
  // i is neither a multiple of 3 or 5 return i by itself 
  } else {
    console.log(i);
  }
}
  // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
