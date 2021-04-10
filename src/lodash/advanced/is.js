const _ = require("lodash");

console.log(_.isNil({ name: "Mike" }));
console.log(_.isEmpty([]));
console.log(_.isEqual([1, 2], [1, 2]));
