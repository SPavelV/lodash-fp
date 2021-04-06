const _ = require("lodash");

const users = [
  {
    id: 3,
    name: "Mike",
    active: false,
    age: 32,
  },
  {
    id: 2,
    name: "Jack",
    active: true,
    age: 27,
  },
  {
    id: 1,
    name: "John",
    active: true,
    age: 28,
  },
];

getYoungestUserMessageUsingLodash = (users) =>
  _.chain(users)
    .filter("active")
    .orderBy(["age"])
    .map((user) => `${user.name} is ${user.age}`)
    .head()
    .value();

console.log(
  `getYoungestUserMessageUsingLodash`,
  getYoungestUserMessageUsingLodash(users)
);

getYoungestUserMessage = (users) => {
  const activeUsers = _.filter(users, "active");
  const youngestUser = _.orderBy(activeUsers, ["age"]);
  const firsUser = youngestUser[0];
  return `${firsUser.name} is ${firsUser.age}`;
};

const result = getYoungestUserMessage(users);
console.log(`result`, result);
