const _ = require("lodash");

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" },
];

const result = _.find(users, (user) => user.id === 1);
console.log(`result `, result);
