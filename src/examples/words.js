const listen = require("./VladimirMayakovsky");
const _ = require("lodash");

const top5words = _.flow([
  _.toLower,
  _.words,
  _.countBy,
  _.toPairs,
  _.partial(_.orderBy, _, 1, 'desc'),
  _.partial(_.take, _, 5),
  _.fromPairs
]);

console.log(`top5words(listen) `, top5words(listen));
