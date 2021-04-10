import _ from "lodash";
const handler = function (event) {
  console.log(`send request to server: ${event.target.value}`);
};
document.getElementById("name").addEventListener("keydown", _.debounce(handler, 2000));
document.getElementById("email").addEventListener("keydown", _.throttle(handler, 2000));
