const _ = require("lodash");
const cities = require("./cities.json");

// const output = _(cities)
//   .filter((c) => c.population > 500000)
//   .countBy((c) => c.subject)
//   .toPairs()
//   .map((c) => _.zipObject(["subject", "cities"], c))
//   .orderBy((c) => c.cities, "desc")
//   .take(5)
//   .value();

// console.log(`output `, output);

//==============

const greaterThan = _.curryRight(_.gte);
const populationGraterThan = (num) =>
  _.conforms({ population: greaterThan(num) });
const zip = _.curry(_.zipObject);

const out = _(cities)
  .filter(populationGraterThan(500000))
  .countBy("subject")
  .toPairs()
  .map(zip(["subject", "cities"]))
  .orderBy("cities", "desc")
  .take(6)
  .value();
console.log(`out `, out);
