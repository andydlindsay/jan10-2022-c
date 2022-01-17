const sayHello = (name) => {
  return `hello there ${name}`;
};

const addTwo = (num) => {
  return num + 2;
};

const MEANING_OF_LIFE = 42;

// module.exports.sayHello = sayHello;

// module.exports = {
//   sayHello: sayHello,
//   addTwo: addTwo,
//   MEANING_OF_LIFE: MEANING_OF_LIFE
// };

// module.exports = [sayHello, addTwo, MEANING_OF_LIFE];

module.exports = sayHello;
// module.exports = addTwo;
