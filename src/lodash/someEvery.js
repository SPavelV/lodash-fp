const _ = require("lodash");

const users = [
  {
    id: 1,
    name: "John",
    active: true,
    likes: 110,
  },
  {
    id: 2,
    name: "Jack",
    active: false,
    likes: 30,
  },
];

const isSomeActive = _.some(users, { active: true, likes: 110 });
// const isSomeActive = _.some(users, (user) => user.active);
const isAllActive = _.every(users, (user) => user.active);

console.log(`isSomeActive`, isSomeActive);
console.log(`isAllActive`, isAllActive);
