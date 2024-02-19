console.log("==========task-2===========");

let arra = [10, 20, 30, 60, 80, 90, 30, 56, 80];
// 1. give all value which  devided by 2 can- not use filter

let devi = arra.map((e) => {
  return e / 2;
});
console.log("give all value which  devided by 2 can", devi);
// 2. give all value above 3 by use of filter

let above = arra.filter((e) => {
  return e > 3;
});
console.log("give all value above 3 by use of filter  :", above);

// 3. give index of 56

let givind = arra.indexOf(56);

console.log(" give index of 56", givind);

// 4. give true/false result when check given value is exists in array or not

let find = arra.includes(100);
console.log(find);
let find1 = arra.includes(56);
console.log(find1);
