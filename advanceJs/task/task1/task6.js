
let currentdate = new Date();
console.log("currentdate", currentdate);

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  " August",
  "September",
  "October",
  "November",
  "December",
];

let weekday = [
  "Sunday",
  "Monday",
  "Thuseday",
  "Wednesday",
  "Turseday",
  "Friday",
  "Sataurday",
];
if ((weekday[0] = "sunday")) {
  weekday[0] = " To day is Fun day";
}
console.log("cuurernt :", currentdate.getDate());

let munthnum = currentdate.getMonth();
let daynum = currentdate.getDay();
let dd = currentdate.getDate();
let mm = currentdate.getMonth();
let yy = currentdate.getFullYear();

let y = dd + " " + month[munthnum] + " " + yy + " and " + weekday[daynum];

console.log(y);