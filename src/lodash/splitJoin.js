const _ = require("lodash");

const joinUpperString = _.chain(["foo", "bar"]).join("/").toUpper().value();
console.log(`joinUpperString `, joinUpperString);

_.join(["foo", "bar"], "/");

const headString = _.chain("foo/bar").split("/").head().value();
console.log(`headString `, headString);

console.log(_.split("foo/bar", "/"));
console.log([1, 2, 3].join(""));
