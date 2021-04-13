const _ = require("lodash");

const classNames = (cssClasses) =>
  _.chain(cssClasses)
    .keys()
    .filter((key) => cssClasses[key] && key)
    .join(" ")
    .value();

const isAuthor = false;
const isInFocus = true;
const liClass = classNames({
  item: true,
  active: isAuthor,
  "item-highlighted": isInFocus,
});

console.log(`classNames: `, liClass);
