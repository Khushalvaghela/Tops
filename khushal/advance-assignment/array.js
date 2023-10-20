// 1. print 9th and 10th index of array
let arr=[1,2,3,4,5,6,7,8,9,10,11]

let indexval= arr[9]
let indexval1= arr[10]
console.log("1. print 9th and 10th index of array");
console.log("index of arry",indexval,indexval1);

// 2. print every element of array by map and for loop
// in map
let everyelemet= arr.map((e)=>{
    return e
})
    
console.log("everyelemet with map",everyelemet);

// in forloop

for (let i = 1; i < arr; i++) {
    const element = arr[i];
       
}
console.log("everyelement in for loop  :", arr);

// 3. change a value of 6th index with 100

 arr.splice(5,1,100)
 console.log("change a value of 6th index with 100  :",arr);

//  4. print a array till element value not grater then 100
   let arr1=[50,20,30,100,500,600]
let show = arr1.filter((e)=>{
        return e<100
    
})
console.log("print a array till element value not grater then 100  :",show);

// 5. add 1 in every element of an array

let add1value=arr.map((e)=>{
    return e+1
})
console.log("add 1 in every element of an array  :", add1value);
// 6. add 0 in start of array
arr.unshift(0)
console.log("add 0 in start of array  :", arr);
// 7. add  99 in end of array
arr.push(99)
console.log("add  99 in end of array  :", arr);
// 8. remove 1 element from start of  array
 arr.shift()
console.log("remove 1 element from start of  array  :", arr);
// 9. remove 1 element from end of array
arr.pop()
console.log("remove 1 element from end of array  :",arr);

//10. do sum of all value of an array with use of map, reduce and for-loop
// sum of elements with for each loop

// let arr=[1,2,3,4,5,6]
let sum=0;
arr.forEach(e=> sum += e);
console.log("sum of elements with for each loop  :", sum);

// sum with reducer

// let arr4=[1,2,3,4,5,6]

let show4=arr.reduce((last,e)=>{

    return last+e
},0)
console.log( "sum with reducer :",show4);


// sum wih map
let sum7=0;
arr.map(e=> sum7 += e);
console.log("sum wih map  :", sum7);


// 11. sort a array in acending decending
 let show6= arr.sort((a,b)=>{
    return a-b
 })
console.log("acending", show6);

let show5=arr.sort((a,b)=>{
    return b-a
    
})
console.log("decending" ,show5);
//12. reverce an array with use of method

arr.reverse()
console.log( "reverse",arr);

// 13. reverce an array with use of for-loop

const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log("reverce an array with use of for-loop",reversedArr);


console.log("==========task-2===========");

let arra=[1,2,3,6,7,9,3,56,8]
// 1. give all value which can devided by 2 - not use filter
           
    let show7= arra.map((e)=>{
        return e/2
     })
     console.log("goooooo", show7);
// 2. give all value above 3 by use of filter

let above=arra.filter((e)=>{
    return e>3
})
console.log("give all value above 3 by use of filter  :", above);

// 3. give index of 56

let index56=arra.indexOf(56)

console.log(" give index of 56", index56);

// 4. give true/false result when check given value is exists in array or not

let find= arra.includes(100)
   console.log(find);
   let find1= arra.includes(56)
   console.log(find1);


   console.log("==========task-3===========");
//    1. ['i','am', 'urvish'] ==> want ['urvish','am','i']

let string=['i','am','urvish']
   string.reverse()
   console.log(string);

    string.concat()

// 2. want "i am urvish" without use join method

const arrstring = ['i', 'am', 'urvish'];
let str = '';

for (let i = 0; i < arrstring.length; i++) {
  str += arrstring[i];
  if (i !== arrstring.length - 1) {
    str += ' ';
  }
}

console.log(str); 

console.log("==========task-4===========");
// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop


const arr2 = ['i', 'am', 'urvish'];
let str1 = '';

for (let i = arr2.length - 1; i >= 0; i--) {
  let reversedWord = '';
  for (let j = arr2[i].length - 1; j >= 0; j--) {
    reversedWord += arr2[i][j];
  }
  str1 += reversedWord;
  if (i !== 0) {
    str1 += ' ';
  }
}

console.log(str1);



// uv hello world  =>  world hello uv

let str2=["uv","hello","world"]

let show8= str2.reverse().join(' ');

console.log(show8);