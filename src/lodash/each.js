import _ from "lodash";

const products = {
    1: {
        name: "Product 1"
    },
    2: {
        name: "Product 2"
    }
}
const productNames =  []
_.each(products, item => productNames.push(item.name))

console.log(`productsNames`, product1Names)

_.each(products, (item, key) => console.log(item, key));
