const _ = require("lodash");

const users = [
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

const groupBy = (list, prop) => ({
  prop: list.filter((item) =>
    Object.values(item).some((propItem) => propItem === prop)
  ),
});

const result = groupBy(users, "active");
console.log(`result `, result);
