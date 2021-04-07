const _ = require("lodash");

const splitString = _.chain("FOO").toLower().split("").value();
console.log(`splitString`, splitString);

console.log(_.toLower("BAR"));
console.log("Foo".toUpperCase());
