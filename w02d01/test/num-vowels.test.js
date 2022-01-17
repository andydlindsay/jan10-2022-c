const numVowels = require('../num-vowels');
const assert = require('assert');

describe('tests for the numVowels function', () => {

  it('returns 3 when given the string "orange"', () => {
    const actual = numVowels('orange'); // {}()
    const expected = 3;

    assert.strictEqual(actual, expected);

    // assert.strictEqual(numVowels('orange'), 3);
  });

  it('returns 5 when given the string "lighthouse labs"', () => {
    const actual = numVowels('lighthouse labs');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given the string "aeiou"', () => {
    const actual = numVowels('aeiou');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

});

describe('tests for the other function', () => {

  it('amazing tests', () => {});
  
});
