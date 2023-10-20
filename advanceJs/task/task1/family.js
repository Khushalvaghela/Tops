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
      vehical: [
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
      vehical: [
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
          age: "23",
        },
        {
          id: "0002",
          name: "harsh",
          age: "20",
        },
      ],
      vehical: [
        {
          model: "lamborghini",
          Number: "gj-11-222",
        },
      ],
    },
  ],
};
function getFamilyDetails(name) {
  let matchdata = grandp.child.find((e) => {
    return e.name === name;
  });
  return matchdata;
}

let matchData = getFamilyDetails("maheshbhai");
console.log("🚀 ~ file: family.js:92 ~ matchData:", matchData);
