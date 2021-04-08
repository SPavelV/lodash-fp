const _ = require("lodash");
console.log(`Random number from 3 to 7 is `, _.random(3, 7));
console.log(`Random number from 0 to 7 `, _.random(7));
console.log(`Random floating number from 0 to 7`, _.random(7, true));

const random = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

console.log(`Random number from 3 to 7 is `, random(3, 7));

console.log(Math.random());
