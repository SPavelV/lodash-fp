const _ = require("lodash");
const foo = [[1, 2], [3]];

console.log(_.flatten(foo));

const result = [].concat.apply([], foo);
console.log(`result `, result);
