// console.log(arguments);

const sayHello = require('./manual-testing');

// console.log(sayHello);

const assert = require('assert');

const assertStrict = assert.strict;

// console.log(assertStrict);

const actual = sayHello('Alice');

console.assert(true, 'they are not equal');

// assertStrict.equal(actual, 'hello there Alice');
