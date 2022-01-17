/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7
// 0 1 2 3 4 5

// 6 / 2 = 3 - 1 = 2

// 5 - 1 = 4 / 2 = 2
// 5 / 2 = 2.5 = 2

const median = function(arr) {
  // sort the array
  arr.sort();

  // is the array even or odd length?
  if (arr.length % 2 === 0) {
    // if even, return the avg of the two middle elements
    const rightIndex = arr.length / 2;
    const leftIndex = rightIndex - 1;

    const valOne = arr[rightIndex];
    const valTwo = arr[leftIndex];

    const sum = valOne + valTwo;
    const average = sum / 2;
    return round(average);
  } 

  // if odd, return the middle element
  // calculate the middle index  BEDMAS PEDMAS
  const middleIndex = (arr.length - 1) / 2;
  return arr[middleIndex];

};

// Don't change below:
module.exports = { median };
