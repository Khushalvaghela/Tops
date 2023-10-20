let jdata = require("../data.json");
// console.log("🚀 ~ file: datatask.js:2 ~ jdata:", jdata);

//   city filter based on state name
function getcityname(state) {
  let filterdata = jdata.filter((e) => {
    return e?.state_name === state;
  });
  let cityfil = filterdata.map((e) => {
    return e.city;
  });
  return cityfil;
}

let city1 = getcityname("Gujarāt");
// console.log("city1:", city1)

// print city name based on population

function citybypopulation(populations) {
  let populationfill = jdata.filter((e) => {
    // Number(populations)
    return e.population > populations;
  });

  let citynamebypopulation = populationfill.map((e) => {
    return e?.city;
  });

  return citynamebypopulation;
}

let cityn1 = citybypopulation(10000000);
console.log("cityn1:", cityn1);
