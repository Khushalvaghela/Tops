let DUPArray = [1, 2, 2, 3, 4, 4, 5];
let fiterArray = DUPArray.filter((item, index) => DUPArray.indexOf(item) === index);
console.log(fiterArray);
