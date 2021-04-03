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

const orderBy = _.orderBy(users, ["likes", "name"], ["asc", "asc"]);
// const orderBy = _.orderBy(users, ["likes"], ['desc']);
// const orderBy = _.orderBy(users, ["likes"], ['asc']);
console.log(`orderBy`, orderBy);

const result = users.sort((user1, user2) =>
  user1.likes > user2.likes ? -1 : 1
);
console.log(`result `, result);
