const _ = require("lodash");

const state = {
  isLoading: false,
  data: null,
  error: null,
};

const newStateLodash = _.assign({}, state, { isLoading: true });
console.log(`newStateLodash `, state, newStateLodash);
const newState = Object.assign({}, state, { isLoading: true }); // native js
console.log("result", state, newState);
