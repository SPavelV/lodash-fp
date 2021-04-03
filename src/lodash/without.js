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

const getPopularUsers = (users) =>
  _.filter(users, (user) => user.active && user.likes > 100);
//   _.reject(users, (user) => !user.active || user.likes <= 100);

const resultPopularUsers = getPopularUsers(users);
console.log(`resultPopularUsers`, resultPopularUsers);

const objArr = [{ id: 1 }, { id: 2 }];
const resultReject = _.reject(objArr, (obj) => obj.id === 1);
console.log(`resultReject `, resultReject);

const arr2 = [1, 2, 3, 4];
const result2 = _.without(arr2, 1, 3);
console.log(`result2 `, result2);
console.log(`arr2 `, arr2);

const arr = [1, 2, 3];

const result = _.pull(arr, 1);
console.log(`result`, result);
console.log(`arr `, arr);
