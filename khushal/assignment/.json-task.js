// 1. import data from json
let data = require("./data.json");
console.log("🚀 ~ file: .json-task.js:3 ~ data:", data);

// 2. give all city name of state which one give by user
//
function getcityname(state) {
  let filterdata = data.filter((e) => {
    return e?.state_name === state;
  });

  let cityfil = filterdata.map((e) => {
    return e.city;
  });
  return cityfil;
}

let city1 = getcityname("Gujarāt");
// console.log("🚀 ~ file: .json-task.js:19 ~ city1:", city1)

//  3. give all city name , which have more character than user given input

function city(params) {
  let cityname = data.map((e) => {
    return e.city;
  });
  // console.log("🚀 ~ file: .json-task.js:27 ~ cityname ~ cityname:", cityname)
  let cityshow = cityname.filter((e) => {
    return e.length > 15;
  });
  // console.log("🚀 ~ file: .json-task.js:31 ~ cityshow ~ cityshow:", cityshow)
}

city();

//  4. city list which has population more then user give

function citybypopulation(populations) {
  let populationfill = data.filter((e) => {
    // Number(populations)
    return e.population > populations;
  });

  let citynamebypopulation = populationfill.map((e) => {
    return e?.city;
  });

  return citynamebypopulation;
}

let cityn1 = citybypopulation(10000000);
// console.log("🚀 ~ file: .json-task.js:52 ~ cityn1:", cityn1)

// 5. acending decending population wise

let arr = [];
data.map((obje) => {
  let index = arr.findIndex((ife) => ife.state === obje.state_name);
  if (index === -1) {
    arr.push({
      state: obje.state_name,
      population: +obje.population,
    });
  } else {
    arr[index].population += +obje.population;
  }
});
// console.log("jdata.map ~ arr:", arr)

let acending = arr.sort((a, b) => {
  return b.population - a.population;
});
// console.log("acending ~ acending:", acending)

let decending = acending.sort((a, b) => {
  return a.population - b.population;
});
// console.log("decending ~ decending:", decending)

// 6. top 5 city population wise [only name of city]

let arr1 = [];
data.map((obje) => {
  let index = arr1.findIndex((ife) => ife.city === obje.city);
  if (index === -1) {
    arr1.push({
      city: obje.city,
      population: +obje.population,
    });
  } else {
    arr1[index].population += +obje.population;
  }
});
let y = arr1.sort((a, b) => {
  return b.population - a.population;
});
// console.log("y ~ y:", y)
// console.log("data.map ~ arr1:", arr1)
let x = y.map((e) => {
  return e.city;
});
let print = x.slice(0, 5);
//  console.log("print:", print)

//  7. give total populatin of state which give by user

function fun1(man) {
  let x = data.filter((e) => {
    return e.state_name === man;
  });
  // console.log("x ~ x:", x)
  if (x) {
    return x.filter((e) => {
      return e;
    });
  } else {
    return "not prasent";
  }
}
let z = fun1("Mahārāshtra");
// console.log("z:", z)

let show = z.map((e) => {
  return +e.population;
});

let total = show.reduce((last, e) => {
  return last + e;
}, 0);
// console.log("tota ~ show:", show)
// console.log("tota ~ total:", total)

// 8. give top 5 state name population wise

let arr2 = [];
data.map((obje) => {
  let index = arr2.findIndex((ife) => ife.state === obje.state_name);
  if (index === -1) {
    arr2.push({
      state: obje.state_name,
      population: +obje.population,
    });
  } else {
    arr2[index].population += +obje.population;
  }
});
// console.log("jdata.map ~ arr:", arr)

let acending1 = arr2.sort((a, b) => {
  return b.population - a.population;
});
let show1 = acending1.map((e) => {
  return e.state;
});
//  console.log("show1 ~ show1:", show1)

let print1 = show1.slice(0, 5);
// console.log("print1:", print1)
