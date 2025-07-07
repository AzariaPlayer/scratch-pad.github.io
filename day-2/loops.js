// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
/* 
I - input a value that will take place of an array 
O - output the values of the array
C - n/a
E - n/a
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
// create a for loop to loop over the array 
for(var i = 0; i < array.length; i++){
  // print the array index to the console
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
/* 
I - input an array
O - return the values of the array but backwards 
C - n/a
E - n/a
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // create a for loop to loop over the array 
  // remember array.length - 1 gives you the last index of the array
  for(var i = array.length - 1 ; i >= 0; i--){
  // print the array backwards index to the console
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(printArrayValues(["Azaria", "Bob"])); 

/**
 * Given an input Object, return an Array containing the Object keys.
 */
/* 
I - input an object
O - return an array of the object keys
C - n/a
E - n/a
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // make a storage array
  let objKeys = []; 
  for ( var key in object ){
    // push the key to the objKeys array
    objKeys.push(key);
  }
  // return the storage array
  return objKeys;
  // YOUR CODE ABOVE HERE //
}
// invoke and call our function 
// lets make an object
let facts = {
  name: "Azaria",
  age: 22, 
  favGame: "Fallout 4"
};
console.log(getObjectKeys(facts));

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
/* 
I - input an object
O - return the object keys and print it to the console
C - use a loop
E - n/a
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
// maybe use some type of for..in loop to loop over an object
for(var key in object){
  // print the object keys to the console
 console.log(key);
}
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(printObjectKeys(facts));

/**
 * Given an input Object, return an Array containing the Object's values.
 */

/* 
I - input an object
O - return an array with the objects values
C - n/a
E - n/a
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // start with a storage array
  let objValues = [];
  // use a for in loop
  for(var key in object){
    // push the value of the object to the empty array
    objValues.push(object[key]);
  }
  // return the array 
    return objValues;
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(printObjectKeys(facts));

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
/* 
I - input an object
O - print the objects VALUES to the console
C - loop over the object
E - n/a
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // make a loop that returns the values of the object
  for(var key in object){
    // print the values to the console
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(printObjectValues(facts));

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/* 
I - input an object
O - return the number of key/value pairs in that object
C - n/a
E - n/a
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  let i = 0; // our count variable
  for(var key in object){
    // increase the count for each key value
    i++;
  }
  // make sure to return i to show the amount 
  return i;
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(getObjectLength(facts));

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */

/* 
I - input an object
O - return the object values in REVERSE
C - n/a
E - n/a
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // remember we just want to count backwards
  // store a variable of all the keys 
  let keys = Object.keys(object);
  // reverse the values of that variable
  keys.reverse();
  
  // make a loop that counts each key in the key reverse and log it
  for(var i = 0; i < keys.length ; i++){
    // store index of the reversed key in a different variable 
    let revKey = keys[i];
    // log the index to the console
    console.log(object[revKey]);
  }
  // YOUR CODE ABOVE HERE //
}
// invoke
console.log(printObjectValuesInReverse(facts));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
