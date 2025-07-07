// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I - function should take a string as the parameter
O - should return the length of the string
C - n/a
E - n/a
*/
function length(string) {
  // YOUR CODE BELOW HERE //
// using .length() return the length of the string parameter 
  return string.length;
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(length("hello"));

/**
 * Given an input String, return a new String forced to lowercase.
 */

/* 
I - Funtion should take a string 
O - output the string to be ONLY lowercase
C - n/a
E - n/a
*/
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
  // return string parameter to lowercase 
  return string.toLowerCase();
  // YOUR CODE ABOVE HERE //
}
// invoke and call the function
console.log(toLowerCase("HELLO!"));

/**
 * Given an input String, return a new String forced to uppercase.
 */

/* 
I - Function should take in a string
O - return the string in all uppercase
C - n/a
E - n/a
*/
function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
  // return the string in all uppercase
  return string.toUpperCase();
  // YOUR CODE ABOVE HERE //
}
// invoke and call the function 
console.log(toUpperCase("hello!"));

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/* 
I - Function should take a sting 
O - return a NEW string with dashes for the spaces 
C - n/a
E - n/a
*/
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  // split the string, join the split string with a case, and make it lowercase
  return string.split(" ").join("-").toLowerCase();
  return string;
  // YOUR CODE ABOVE HERE //
}
// invoke and call the function 
console.log(toDashCase("Hello World!"));

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I - a function with a string and a character 
O - return true if string starts with the character, else false
C - 
E -
*/
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
// you want to be able to check if the first string value is the same as the char value
  // you can use an if else statement 
  // making them both lowercase since it is case insensitive 
  if(string[0].toLowerCase() === char.toLowerCase()){
    // return true
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(beginsWith("hello", "z"));

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I - input a sting and a char for the parameters
O - output true or false if the last value of the index matches the char value
C - n/a
E - n/a
*/
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
// you want to be able to check if the last value is the same as the char
  // you can use an if else statement 
  // make sure to use bracket notation to access the last index without hardcoding 
  if(string[string.length - 1].toLowerCase() == char.toLowerCase()){
    // return true
    return true;
  } else {
    return false;
  }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(endsWith("hello", "O"));
/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I - input two strings into a function parameter
O - the two parameters added together
C - 
E - 
*/ 
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // return the two parameters added together 
  return stringOne + stringTwo;
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(concat("Hello ", "World"));

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I - Input any amount of strings
O - each string added together inside of one string
C - n/a
E - n/a
*/
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
  // you just want to join the strings together and return that to the terminal
  return args.join("");
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(join("hello", "there", "stranger"));
/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I - input two strings for the parameter
O - output the longest string of the two parameters
C - n/a
E - n/a
*/
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // use an if statement to compare lengths using .length method
  if(stringOne.length > stringTwo.length){
  // return stringOne if its the longest
    return stringOne;
  // return stringTwo otherwise
  } else { 
    return stringTwo;
  }
  // YOUR CODE ABOVE HERE //
}
// invoke and call the function
console.log(longest("lovely", "popcorn"));

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I - input two strings 
O - which ever first index is earlier in the alphabet return that one
C - n/a
E - n/a
*/
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // use a if..else if...else statement 
  // REMEMBER characters have a number assigned to them naturally
  if(stringOne < stringTwo){
    // have a return statement if the first string is earlier in the order
    return 1;
    } else if (stringOne > stringTwo){
    // have a return statement if the second string is later in the order
    return -1;
    } else {
      // have a return statement if they are equal
      return 0;
    }
  // YOUR CODE ABOVE HERE //
}
// invoke the function
console.log(sortAscending("apple", "apple"));

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I - input two strings 
O - the string with the latest in order for the index comes first 
C - n/a
E - n/a
*/
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // use a if..else if...else statement 
  // REMEMBER characters have a number assigned to them, use naturally
  if(stringOne > stringTwo){
    // have a return statement if the first strings last index is later
      return 1;
    } else if (stringOne < stringTwo){
    // have a return statement if the first strings last index comes before the last index of the second string
      return -1;
    } else {
      // have a return statement if they are equal
      return 0;
    }
  // YOUR CODE ABOVE HERE //
}
// invoke your function
console.log(sortAscending("banana", "zebra"));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}
