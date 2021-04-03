const _ = require("lodash");

const usersData = [
  {
    id: 1,
    status: "active",
    first_name: "John",
  },
  {
    id: 2,
    status: "inactive",
    first_name: "Mike",
  },
];

const getNormalizeUsersArr = (users) => {
  return _.map(users, ({ id, status, first_name }) => {
    return {
      id,
      firstName: first_name,
      isActive: status === "active",
    };
  });
};

console.log(`getNormalizeUsersArr(users)`, getNormalizeUsersArr(usersData));

// const users = [
//     {
//         id: 1,
//         firstName: "John",
//         isActive: true
//     }
// ]

const usersObj = {
  1: { name: "User 1" },
  2: { name: "User 2" },
  3: { name: "User 3" },
};

const idsObj = _.map(usersObj, (value, key) => {
  console.log(`value `, value);
  console.log(`key `, key);
  return Number(key);
});
console.log(`idsObj `, idsObj);

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

const ids = _.map(users, (user) => user.id);
console.log(`users`, ids);

newArr = [1, 2, 3].map((item) => item * item);
console.log(`neaArr `, newArr);

const newLoArr = _.map([1, 2, 3], (item) => item * item);
console.log(`newLoArr`, newLoArr);
