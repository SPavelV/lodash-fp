const _ = require("lodash");

const initialUrl = "/posts/:postId/comments/:commentId";

const replaceParamsInUrl = (url, replacments) => {
  return _.reduce(
    replacments,
    (acc, replacment) => _.replace(acc, ":" + replacment.from, replacment.to),
    url
  );
};

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);

console.log(`resultUrl `, resultUrl);
