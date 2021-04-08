const _ = require("lodash");

const capitalizeString = (str) => {
  const lowerCaseStr = _.toLower(str);
  const firstLetter = _.chain(lowerCaseStr).head().toUpper().value();
  return firstLetter + _.tail(lowerCaseStr).join("");
};
console.log(capitalizeString("foo Bar"));

const capitalize = (str) => {
  const trimString = str.trim().toLowerCase();
  const firstLetter = trimString[0].toUpperCase();
  return firstLetter + trimString.slice(1);
};

console.log(capitalize("foo Bar"));
