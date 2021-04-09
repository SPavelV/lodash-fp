const _ = require("lodash");
console.log(_.compact([null, undefined, "foo bar"]));

console.log([null, undefined, "foo bar"].filter(Boolean));
