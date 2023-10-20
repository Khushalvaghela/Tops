// for (let i = 1; i < 6; i++) {
//     // let y = i
//     // console.log("🚀 ~ file: task5.js:3 ~ y:", y)
//     let x = Math.round(Math.random()*i)+1;
//     console.log("🚀 ~ file: task5.js:3 ~ x:", x)
   
// }

function fun() {
    for (let i = 1; i < 10; i--) {
      let a = Math.random() * 10;
      let b = Math.trunc(a);
      if (b <= 6) {
        return b;
      }
    }
  }
  let print = fun();
  console.log(" print:", print);