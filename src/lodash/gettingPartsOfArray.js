const _ = require("lodash");

const myString = "FooBar";

const notFirstElementOfString = _.chain(myString).tail().join("").value();
console.log(`notFirstElementOfString`, notFirstElementOfString);

const numbers = [1, 2, 3];

const firstElementOfArray = _.chain(numbers).head().value();
console.log(`first element of array `, _.head(numbers));
console.log(`not first element of array `, _.tail(numbers));
console.log(`last element of array`, _.last(numbers));
console.log(`not last element of array`, _.initial(numbers));
