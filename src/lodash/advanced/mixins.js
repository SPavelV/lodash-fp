const _ = require("lodash");

const capitalizeLast = (str) => {
  const lastSymbol = _.last(str);
  const initialSymbols = _.chain(str).initial().join("").value();

  return initialSymbols + _.capitalize(lastSymbol);
};

_.mixin({ capitalizeLast: capitalizeLast });

const result = _.chain("foo").capitalizeLast().value();
console.log(`result `, result);
