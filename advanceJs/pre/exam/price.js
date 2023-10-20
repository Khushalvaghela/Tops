// let data = require("./product.json");
// function fun(user) {
//   let one = prod.filter((e) => {
//     return e.title === user;
//   });
//   let two = one.map((e) => {
//     return e.price;
//   });
//   return two;
// }
// let hg = fun("key holder");
// console.log(" ~ hg:", hg);

// let data = require("./product.json");

// function fun(user) {
//   let one = data.filter((e) => {
//     return e.title === user;
//   });
//   let two = one.map((e) => {
//     return e.price;
//   });
//   return two;
// }

// let hg = fun("Key Holder");
// console.log("~ hg:", hg);
// let prod = require("./product.json");
// function fun(user) {
//   let pri = prod.filter((e) => {
//     return e.title === user;
//   });
//   let two = pri.map((e) => {
//     return e.category[1];
//   });
//   return two;
// }
// let hg = fun();
// console.log("🚀 ~ file: price.js:36 ~ hg:", hg);
// // console.log("🚀 ~ file: price.js:32 ~ pri ~ pri:", pri);

let data = require("./product.json");

function findProductsByCategory(category) {
  let matchingProducts = data.filter((product) => {
    return product.category.includes(category);
  });

  return matchingProducts;
}

// Example usage: Find products in the "5g" category
let category5GProducts = findProductsByCategory("5g");
console.log("Products in the '5g' category:", category5GProducts);

// Example usage: Find products in the "3g" category
// let category3GProducts = findProductsByCategory("3g");
// console.log("Products in the '3g' category:", category3GProducts);
