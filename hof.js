const _ = require("lodash");

const multiple = (a, b) => a * b;
const divide = (a, b) => a / b;

// console.log(`multiple(2,3) `, multiple(2, 3));

// const double = (num) => multiple(num, 2);

// function partial(fn, ...fixed) {
//     return function(...args) {
//         return fn.apply(this, fixed.concat(args));
//     }
// }

// function partial(fn) {
//   const fixed = _.tail(_.toArray(arguments));

//   return function () {
//     return fn.apply(this, _.concat(fixed, arguments));
//   };
// }

const double = _.partial(multiple, 2);
// console.log(`double(21) `, double(21));

// const half = _.partialRight(divide, 2);
const half = _.partial(divide, _, 2);
console.log(`half(4) `, half(4));
