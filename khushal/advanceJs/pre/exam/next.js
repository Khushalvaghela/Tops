// let data = require("./product.json");
// function fun() {
//   let one = prod.filter((e) => {
//     return (
//       e.gender === "male" &&
//       e.price > 100 &&
//       e.color[0] == "red" &&
//       e.discountPercentage > 16.49
//     );
//   });
//   let two = one.map((e) => {
//     return e.title;
//   });
//   let ext = [];
//   two.array.forEach((e) => {
//     if (e !== undefined) {
//       ext.push(e);
//     }
//   });
//   return ext;
// }
// let hg = fun();
// console.log("hg:", hg);
let data = require("./product.json");

// function fun() {
//   let one = data.filter((e) => {
//     return (
//       e.category === "5g"
//       // e.price > 100 &&
//       // e.color[0] === "red" && // Use '===' for strict equality comparison
//       // e.discountPercentage >= 11.83
//     );
//   });
//   console.log("🚀 ~ file: next.js:35 ~ one ~ one:", one);

//   let two = one.map((e) => {
//     return e.title;
//   });

//   // let ext = [];
//   // two.forEach((e) => {
//   //   if (e !== undefined) {
//   //     ext.push(e);
//   //   }
//   // });

//   // return ext;
//   return two;
// }

// let hg = fun();
// console.log("hg:", hg);

// let data = require("./product.json");

function fun(user) {
  let one = data.filter((e) => {
    return e.category === "5g";
  });
  console.log("🚀 ~ file: next.js:35 ~ one ~ one:", one);

  let two = one.map((e) => {
    return e.title;
  });

  return two;
}

let hg = fun("Key Holder");
console.log("hg:", hg);
