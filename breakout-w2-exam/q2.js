"use strict";

/* Question 02

Implement a function called countWhich() which will take in a list of items and a callback, and it will return the number of elements which return a truthy value from the callback function.

If the first argument is not an array, our function should return false instead of a number.

Examples:

- countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); }) returns 1 (only matches 5)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; }) returns 1 (only matches apple)
- countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; }) returns 0 (none of the numbers are divisible by 7)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; }) returns 2 ("apple" is shorter than 6 characters)
- countWhich([], function(x) { return x > 10 }) returns 0
- countWhich("This should fail", function(word) { return true; }) returns false (because the first argument is not an array)

*/

const countWhich = function(list, cb) {
  if (!Array.isArray(list)) {
    return false;
  }

  // // set up a variable to hold the count
  // let count = 0;

  // // loop through the array
  // for (const element of list) {
  //   // call the callback with each element of the array
  //   const returnVal = cb(element);
  //   // if the callback returns truthy, increment the count
  //   if (returnVal) {
  //     count += 1;
  //   }
  // }

  // // return count
  // return count;

  return list.filter(cb).length;
};

// Don't change below:

module.exports = { countWhich };
