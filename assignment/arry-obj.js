let grandp = {
  id: "01",
  name: "jethabhai",
  age: "87",

  child: [
    {
      id: "001",
      name: "maheshbhai",
      occupation: "job",
      age: "52",
      children: [
        {
          id: "0001",
          name: "yagnik",
          age: "32",
        },
        {
          id: "0002",
          name: "prashant",
          age: "27",
        },
      ],
      vehicle: [
        {
          model: "bmw",
          Number: "gj-11-972",
        },
      ],
    },
    {
      id: "002",
      name: "bharatbhai",
      occupation: "febrication work",
      age: "50",

      children: [
        {
          id: "0001",
          name: "krunal",
          age: "21",
        },
        {
          id: "0002",
          name: "jenny",
          age: "1",
        },
      ],
      vehicle: [
        {
          model: "mersediz",
          Number: "gj-11-1111",
        },
      ],
    },
    {
      id: "003",
      name: "rameshbhai",
      occupation: "febrication work",
      age: "49",

      children: [
        {
          id: "0001",
          name: "khushal",
          age: 23,
        },
        {
          id: "0002",
          name: "harsh",
          age: 20,
        },
      ],
      vehicle: [
        {
          model: "lamborghini",
          Number: "gj-11-222",
        },
        {
          model: "swift",
          Number: "gj-11-160",
        },
      ],
    },
  ],
};

// console.log(grandp.name);
// console.log(grandp.child[1].name);
// console.log(grandp.child[1].children[1].name);
// console.log(grandp.child[2].vehicle[0].model);
// console.log(grandp.child[0].vehicle[0].Number);

// for (const key in grandp){
//   console.log("---------->:", key);
//   grandp.key;
//   console.log("---------->:", grandp[key]);

// }
//tak -5 3child  sun age  adition

// let sum = 0;
// let chil = grandp.child[2].children.map((e) => {
//   return sum += e.age
// });
// console.log(" chil:", sum)
// console.log(sum);

//  task-4 2nd child  vehical name
//  let chil = grandp.child[1].model.map((e) => {
//    console.log(e);
//   return e.model;
// });
// console.log("name :-->", chil);

// let chil = grandp.child[1].children.map((e) => {
//  return e.name;
// });
// console.log("name :-->", chil);

// -> all son of your dada name only
// let sonNames = [];

// for (let i = 0; i < grandp.child.length; i++) {
//   sonNames.push(grandp.child[i].name);
// }

// console.log(sonNames);

// -> all son of father/uncle's
let sonNames1 = [];

for (let i = 0; i < grandp.child.length; i++) {
  for (let j = 0; j < grandp.child[i].children.length; j++) {
    sonNames1.push(grandp.child[i].children[j].name);
  }
}

console.log(sonNames1);
