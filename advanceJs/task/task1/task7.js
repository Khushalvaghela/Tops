

let increment = {
    start: 1,
    coun: function(){
      setInterval(() => {
        console.log(this.start++);
      }, 2000)
    }
  }
  
  increment.coun();




// function clock() {
//   let date = new Date();
//   let houre = date.getHours();
//   let minut = date.getMinutes();
//   let sec = date.getSeconds();

//   console.log(`${houre} : ${minut} : ${sec}`); 
// }

// setInterval(() => {
//   clock();
// }, 1000);