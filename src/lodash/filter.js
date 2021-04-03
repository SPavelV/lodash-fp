const _ = require("lodash");

const productsData = [
  {
    id: 1,
    name: "milk",
    price: "1$",
  },
  {
    id: 2,
    name: "bread",
    price: "2$",
  },
  {
    id: 3,
    name: "meat",
    price: "3$",
  },
];

const searchProducts = (products, searchValue) => {
  return _.filter(
    products,
    // (product) => product.name.indexOf(searchValue) !== -1
    // (product) => product.name.includes(searchValue)
    (product) => _.includes(product.name, searchValue)
  );
};

const resultSearchProducts = searchProducts(productsData, "m");
console.log(`resultSearchProducts `, resultSearchProducts);

const products = {
  1: {
    name: "Milk",
    price: 100,
  },
  2: {
    name: "Meat",
    price: 300,
  },
};

const productPrice = _.filter(products, (product) => product.price > 100);
console.log(`productPrice `, productPrice);

const usersData = [
  {
    id: 1,
    name: "John",
    isActive: false,
  },
  {
    id: 2,
    first_name: "Mike",
    isActive: true,
  },
];

const userName = _.filter(usersData, ["name", "John"]);
console.log(`userName `, userName);

const userActive = _.filter(usersData, "isActive");
console.log(`userActive `, userActive);

const user = _.filter(usersData, (user) => user.name === "John");
console.log(`user `, user);

const filterNumbers = _.filter([1, 2, 3, 4, 5, 6], (number) => number > 3);
console.log(`filterNumbers`, filterNumbers);
