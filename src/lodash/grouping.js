const _ = require("lodash");

const users = [
  {
    id: 3,
    name: "Mike",
    active: false,
    likes: 30,
  },
  {
    id: 2,
    name: "Jack",
    active: false,
    likes: 30,
  },
  {
    id: 1,
    name: "John",
    active: true,
    likes: 110,
  },
];

const groupBy = (list, prop) => {
  return list.reduce((aggregator, element) => {
    console.log(
      "qqq",
      aggregator,
      element,
      element[prop],
      aggregator[element[prop]]
    );
    (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
    return aggregator;
  }, {});
};

const result = groupBy(users, "active");
console.log(`result `, result);
