const _ = require("lodash");

const toSlug = (string) =>
  encodeURI(_.chain(string).toLower().split(" ").join("-").value());

const slug = toSlug("This is super quiz");
console.log(`slug `, slug);
