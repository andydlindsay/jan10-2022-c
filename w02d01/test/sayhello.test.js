const sayHello = require('../manual-testing');
const assert = require('assert');

describe('tests for sayHello', () => {

  it('describes the thing that we are testing', () => {
    // testing logic in here
    // throw new Error('ooooops something went wrong');
  });
  
  it('returns "hello there Alice" when given the string "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello there Alice';
  
    assert.strictEqual(actual, expected);
  });

});

