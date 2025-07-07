// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. // done i think
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
  // match the parameters with the object keys
  return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
  };
}



function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];

  return {
    // we implemented the length api for you //
    length: function(){
      // lets start with number 1 - return the length of the number of contacts (array)
      // and remember that this return is an array its self - make key/ value pairs
      return contacts.length;
    },
    // number 2 - adding a contact
    addContact: function(contact){
      // find a way to add the contact to the contacts array - maybe using push
        contacts.push(contact);
      },
      // number 3
      findContact: function findFullName(fullName){ // the function
        for(var i = 0; i < contacts.length; i++){ // looping through each index in the array
          // when creating the loop dont forget when putting [i] you have to put where you are getting it from
          if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) { // concat the two key/values
            // return the WHOLE object that matches the for loop
            return contacts[i];
          };
        }
        // if not found in the loop - return undefined
        return undefined;
      }, 
      // number 4
      removeContact: function remove(contact){ // start with your function
        // remember to loop through the array to reach each index
        for(var i = 0; i < contacts.length ; i++){ 
          // if the properies match together // you are comparing the two against each other to see if they match
          if(contacts[i] === contact){ 
            // remove that index from the contacts array and only remove one
            return contacts.splice(i, 1)[0]; 
          }
        }
    
      },
      printAllContactNames: function (){
        // empty string for out outcome
        let allNames = "";
        // our loop to iterate through the array indexs 
        for(var i = 0; i < contacts.length; i++){
          // for everytime it loops we need a variable to stand for the index
          let selectedContact = contacts[i]; 
          // and you also are return fullName with no fullName property, so think of how you got fullname previousy 
          let fullName = selectedContact.nameFirst + " " + selectedContact.nameLast;
          // now you need to add the full name to the empty string BUT for each time it iterates 
          allNames += fullName;
          // now how can you test if we are at the last index of the array 
          // if else statement to test i and the length 
          if (i !== contacts.length - 1){ // basically saying if i(which is the index of the array we are on) is NOT the last index
            // then add a new line to the return with every iteration 
            allNames += "\n";
          };
        };
        // return allNames after loop is over 
        return allNames;
      }
      
      
    
  };
}

// YOUR CODE GOES ABOVE HERE //

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
