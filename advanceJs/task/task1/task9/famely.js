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
  ],
};

function find1(id) {
  const familyMember = grandp.child.find((e) => e.id === id);

  if (familyMember) {
    return familyMember.children.map((child) => child.name);
  } else {
    return "Not present in the family.";
  }
}

let show = find1("001");
console.log(show);
