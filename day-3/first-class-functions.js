// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */
function createGreaterThanFilter(base) {
  // YOUR CODE BELOW HERE //
  // return a function that takes value as parameter
  return function(value){
  // return value > base ( will print true or false )
  return value > base;
}
  // YOUR CODE ABOVE HERE //
}
// you are assigning a varible to the parameter of the main function
let greaterThan = createGreaterThanFilter(50); // now the value 50 will take place of base
// since base is know know, when logging the argument needed is the value 
console.log(greaterThan(15));

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */
function createLessThanFilter(base) {
  // YOUR CODE BELOW HERE //
  // return a function that takes value as parameter
  return function(value){
    // return value < base ( will print true or false )
    return value < base;
  }
  // YOUR CODE ABOVE HERE //
}
  // using the same variables as above
  console.log(greaterThan(15));

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
I - input a character 
O - return A FUNCTION that test is the character starts with the given string character
C - needs to be case insensitive
E
*/
/*
you want to have starts with equal a string of a letter 
and 
you want to have a function test if the starts with = the first index of a string 
*/
function createStartsWithFilter(startsWith) {
  // YOUR CODE BELOW HERE //
  // you want this function to return a function
  // pass a string as the parameter 
  return function(string){
    // now you can compare the startWith and the first index of the string
    // to compare them make them both lower case
    return string[0].toLowerCase() === startsWith.toLowerCase();
  }
  // YOUR CODE ABOVE HERE //
}


  // declare a variable and assign it the main function with a string for the argument
let startingLetter = createStartsWithFilter('a');
// log the variable and invoke a string for the argument 
console.log(startingLetter("Apple"));


/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */
/*
I - input a character 
O - return A FUNCTION that test is the character ENDS with the given string character
C - needs to be case insensitive
E
*/

function createEndsWithFilter(endsWith) {
  // YOUR CODE BELOW HERE //
  // you want this function to return a function
  // pass a string as the parameter 
  return function(string){
    // now you can compare the startWith and the LAST index of the string
    // to compare them make them both lower case
    return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
  }
  // YOUR CODE ABOVE HERE //
}
let endingLetter = createEndsWithFilter('e');
// log the variable and invoke a string for the argument 
console.log(endingLetter("apple"));
/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I -  give an array of strings 
O -  return the array of strings modified 
C - 
E
*/
// a way to loop over the strings 
// push the modified strings somewhere else 

function modifyStrings(strings, modify) {
  // YOUR CODE BELOW HERE //
  // maybe have the storage array here 
  let newStrings = [];
  // for loop to iterate through the array here ? 
  for(var i = 0; i < strings.length ; i++){
    // every iteration pushes to the storage array
      newStrings.push(modify(strings[i]));
    }
  // return the storage array
  return newStrings;
  }
  // YOUR CODE ABOVE HERE //
  // create an array
  let names = ["Azaria", "bob", "Snape"];
  // make a function for the actual modification itself 
  function makeUpperCase(strings) {
    return strings.toUpperCase();
  }
  // now assign a new variable to the main function with the array and modification function as the arguments 
  let newModifiedStrings = modifyStrings(names, makeUpperCase);
  console.log(newModifiedStrings);

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/*
I -  give an array of strings 
O -  return TRUE if ALL stings PASS what test you come up with 
C - 
E
*/

function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
  // rememeber you can loop through things with for
  // create the loop to run through the array
  for(var i = 0; i < strings.length; i++){
    /*  for every index we go through check if it passed the test. If it passes whatever the test it return true
    */
    if(test(strings[1])){
      // return statement 
      return true;
    }
  }
  // else return false
  return false;
  // YOUR CODE ABOVE HERE //
}
  // now make another function only for the test you want to run
  function checkFirstLetter(strings){
    // checking if the first index matches the letter b 
    return strings[0].toLowerCase() === 'b';
 }
  // create an array 
  let colors = ["blue", "pink", "brown"];
  // log the main function with the array and test function as arguments 
  console.log(allStringsPass(colors, checkFirstLetter));

  
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
