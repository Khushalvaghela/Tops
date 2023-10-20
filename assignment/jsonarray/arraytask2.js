console.log("********task-2*******");

let arra = [1, 2, 3, 6, 7, 9, 3, 56, 8];
// 1. give all value which can devided by 2 - not use filter

let show7 = arra.map((e) => {
  return e / 2;
});
console.log("give all value which can devided by 2", show7);
// 2. give all value above 3 by use of filter

let above = arra.filter((e) => {
  return e > 3;
});
console.log("give all value above 3 by use of filter  :", above);

// 3. give index of 56

let index56 = arra.indexOf(56);

console.log(" give index of 56", index56);

// 4. give true/false result when check given value is exists in array or not

let find = arra.includes(100);
console.log(find);
let find1 = arra.includes(56);
console.log(find1);
