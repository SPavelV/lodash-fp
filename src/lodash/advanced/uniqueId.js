const _ = require("lodash");

const firstUserId = _.uniqueId("user_");
const secondUserId = _.uniqueId("user_");
console.log(`user Ids: `, firstUserId, secondUserId);
