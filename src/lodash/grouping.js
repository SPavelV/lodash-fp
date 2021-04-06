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

const resultFunction = _.groupBy(users, (user) => user.active);
console.log(`resultFunction`, resultFunction);

const resultLo = _.groupBy(users, "active");
console.log(`resultLo`, resultLo);

const groupBy = (list, prop) => {
  return list.reduce((aggregator, element) => {
    (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
    return aggregator;
  }, {});
};

const result = groupBy(users, "active");
console.log(`result `, result);
