// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
/*
I - input a value
O - return true if value is an array , else return false
C - n/a
E - n/a
*/
function isArray(value) {
  // YOUR CODE BELOW HERE //
  // how can you tell if an array is an array
  //if statement
  if(value instanceof Array){
    // return true 
    return true;
  } else { // else statement if false
    return false;
  }
  // YOUR CODE ABOVE HERE //
}
// create an array
var numbers = [1, 2, 3, 4, 5, 6];
// invoke and call the function 
console.log(isArray(numbers));

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 */
/*
I - input a value
O - return true if value is an object intended as a collection, else false
C - n/a
E - n/a
*/
function isObject(value) {
  // YOUR CODE BELOW HERE //
  // null is not something thats holds a collection
 if(value === null){
  // should return false
   return false;
 } else if (typeof value !== 'object') { // if value type is not object
  // return false
   return false;
 } else if (value.constructor !== Object){ // arrays/dates have constructors that are objects
   // so if the contructor is NOT an Object print false
   return false;
 } else { // anything else return true
   return true;
 }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(isObject(true));

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I - input a value
O - return true if value is an array/object or some type of collection
C - n/a
E - n/a
*/
function isCollection(value) {
  // YOUR CODE BELOW HERE //
  if(Array.isArray(value)){
    return true;
    // remeber arrays and objects value is object by default - NOT null 
  } else if (typeof value === 'object' && value !== null && value.constructor === Object) {
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(isCollection(new Date()));

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
/*
I - input a value
O - return the typeof value in a string
C - n/a
E - n/a
*/
function typeOf(value) {
  // YOUR CODE BELOW HERE //
  // else can be the typeof for the rest
  // but lets do the arrays/objects/others that default as object
  if(Array.isArray(value)){
    // log array
    return "array";
  } else if (value === null){
    // return null
    return "null";
  } else if (value instanceof Date){
    // return date
    return "date";
  } else if (value === undefined){
    // return undefined
    return "undefined";
  } else if (value === true || value === false){
    // return boolean
    return "boolean";
  } else if (typeof value === 'object' && value !== null && value.constructor === Object) {
    // return object
    return "object";
  } else {
    return typeof value;
  }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(typeOf(null));
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
