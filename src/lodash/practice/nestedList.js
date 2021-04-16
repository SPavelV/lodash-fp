const _ = require("lodash");

// TODO:
// 1. Get root elements
// 2. Check children if they have children
// 3. If not -> empty children
// 4. If yes -> do a recusion and do p2

const flatList = [
  {
    id: 1,
    name: "lvl 1 item 1",
    parentId: null,
  },
  {
    id: 2,
    name: "lvl 1 item 2",
    parentId: null,
  },
  {
    id: 3,
    name: "lvl 2 item 3",
    parentId: 1,
  },
  {
    id: 4,
    name: "lvl 3 item 4",
    parentId: 3,
  },
  {
    id: 5,
    name: "lvl 2 item 5",
    parentId: 2,
  },
];

// [
//   {
//     id: 1,
//     children: [
//       {
//         id: 3,
//         children: [
//           {
//             id: 4,
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     children: [
//       {
//         id: 5,
//         children: [],
//       },
//     ],
//   }
// ];

const addChildren = (item) => {
  const children = _.filter(flatList, (childItem) => childItem.parentId === item.id);
  let nestedChildren = [];
  if (!_.isEmpty(children)) nestedChildren = _.map(children, addChildren);

  return _.assign({}, item, { children: nestedChildren });
};

const getNestedList = (arr) =>
  _.chain(arr)
    .filter((item) => item.parentId === null)
    .map(addChildren)
    .value();

const result = getNestedList(flatList);
console.log(`result `, result);
