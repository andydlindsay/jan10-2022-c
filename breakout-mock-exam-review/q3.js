/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create an object to hold our piles
  const piles = {};

  // interate through the arr
  for (const num of arr) {
    // have we seen this number before
    if (piles[num]) {
      // if yes, increment the current count by one
      piles[num] += 1;
    } else {
      // if no, create a new key/value pair inside `piles`
      piles[num] = 1;
    }
  }

  // console.log
  // console.log(piles);

  // set up 2 variables: one to hold current highest, current highest key
  let currentHighest = 0;
  let currentHighestKey = null;

  // loop through the piles object
  for (const key in piles) {
    // access the value at that key
    const value = piles[key];
    // if the value is greater than current highest
    if (value > currentHighest) {
      // replace the current highest AND the current highest key
      currentHighest = value;
      currentHighestKey = key;
    }
  }

  // return the current highest key
  return Number(currentHighestKey);
};

// Don't change below:
module.exports = { mode };
