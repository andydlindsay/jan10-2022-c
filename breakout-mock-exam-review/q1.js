/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a variable to hold our lowest value
  let lowest = arr[0];

  // loop through the arr
  for (const num of arr) {
    // is this the lowest value we've seen so far?
    if (num < lowest) {
      // if yes, we replace our current lowest
      lowest = num;
    }
  }

  // return the lowest value
  return lowest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // create a variable to hold our highest number
  let highest = arr[0]; // -Infinity

  // loop through the array
  for (const num of arr) {
    // is the current number higher than our highest?
    if (num > highest) {
      // if yes, replace highest with current number
      highest = num;
    }
  }

  // return the highest number
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const lowest = min(arr);
  const highest = max(arr);

  const difference = highest - lowest;
  return difference;
};

// Don't change below:

module.exports = { min, max, range };
