const _ = require("lodash");

const bakendErrors = {
  email: {
    errors: [{ message: "Can't be blank" }],
  },
  passwordConfirmation: {
    errors: [{ message: "Must match with password" }],
  },
  password: {
    errors: [
      { message: "Must contain symbols in different case" },
      { message: "Must be at least 8 symbols long" },
    ],
  },
};

const getValidationErrors = (data) =>
  _.map(data, (value, key) => {
    const errors = _.chain(value.errors)
      .map((value) => value.message)
      .join(", ")
      .value();
    return `${_.upperFirst(key)}: ${errors}`;
  });

const result = getValidationErrors(backendErrors);
console.log(`result `, result);
