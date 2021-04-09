const _ = require("lodash");

const baseConfig = {
  apiUrl: "http://someapi.com",
  port: 4000,
};

const createExtendedConfig = (config) => {
  const cloneConfig = _.clone(config);
  cloneConfig.host = "http://foogle.com";
  return cloneConfig;
  // return _.assign({}, config, {host: "http://foogle.com"});
  // return Object.assign({}, config, { host: "http://foog le.com" });
  // config.host = "http://foogle.com";
  // return config;
};

const result = createExtendedConfig(baseConfig);
console.log(`result `, result);
console.log(`baseConfig `, baseConfig);

const a = { b: { c: 1 } };
const b = _.cloneDeep(a);
b.b.foo = "bar";
console.log("problem", a, b);
