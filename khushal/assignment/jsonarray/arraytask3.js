console.log("*********task-3*********");
//    1. ['i','am', 'urvish'] ==> want ['urvish','am','i']

let string = ["i", "am", "urvish"];
string.reverse();
console.log("🚀 ~ file: arraytask3.js:5 ~ string:", string);

string.concat();

// 2. want "i am urvish" without use join method

const arrstring = ["i", "am", "urvish"];
let str = "";

for (let i = 0; i < arrstring.length; i++) {
  str += arrstring[i];
  if (i !== arrstring.length - 1) {
    str += " ";
  }
}

console.log("🚀 ~ file: arraytask3.js:19 ~ str:", str);

console.log("*******task-4**********");
// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop

const arr2 = ["i", "am", "urvish"];
let str1 = "";

for (let i = arr2.length - 1; i >= 0; i--) {
  let reversedWord = "";
  for (let j = arr2[i].length - 1; j >= 0; j--) {
    reversedWord += arr2[i][j];
  }
  str1 += reversedWord;
  if (i !== 0) {
    str1 += " ";
  }
}

console.log("🚀 ~ file: arraytask3.js:38 ~ str1:", str1);

// uv hello world  =>  world hello uv

let str2 = ["uv", "hello", "world"];

let show8 = str2.reverse().join(" ");

console.log(show8);
