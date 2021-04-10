const _ = require("lodash");

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 2,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

// const mapResult = _.map(loc, function (locEl, index) {
//   return _.map(locEl.location_key, (config_key) => {
//     return {
//       config_key: bulkConfig[index].dataValues.config_key,
//       location_key: config_key,
//       autoassign: locEl.autoassign,
//     };
//   });
// });
// const flattenedResult = _.flatten(mapResult);
// console.log(`flattenedResult `, flattenedResult);

const getConfigs = (locEl, index) => {
  return _.map(locEl.location_key, (config_key) => {
    return {
      config_key: bulkConfig[index].dataValues.config_key,
      location_key: config_key,
      autoassign: locEl.autoassign,
    };
  });
};

const configs = _.chain(loc).map(getConfigs).flatten().value();
console.log(`configs`, configs);

// Steps:
// 1. Go with map through loc
// 2. Get index of current element
// 3. bulkConfig[1].dataValues.config_key
// 4. Map location_key
// 5. Flatten

// [
//   {
//     config_Key: 100,
//     location_key: 32,
//     autoassign: 1,
//   },
//   {
//     config_Key: 100,
//     location_key: 22,
//     autoassign: 1,
//   },
// ];
