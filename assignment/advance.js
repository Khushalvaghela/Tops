// 1.● Write a program to Show an alert
 
function fun1(params) {
    alert("hello user")
}
// fun1()

// 2.● What will be the result for these expressions?
// => a. 1. 5 > 4
     let a=5; let b=4
      const z= a>b
    //   console.log("z:", z)  z: true

    //=>b.  2. "apple" > "pineapple"

    let c="apple"; let d="pineapple";
    const e = c>d
    //   console.log("e:", e)  e: false

    //=>c.  3. "2" > "12"    
    let f="2"; let g="12";
        const h= f>g
        // console.log("h:", h)  h: true
    
    //   => d . 4. undefined == null    
    let i=undefined; let j=null;
     const k=i==j
    //   console.log("k:", k)  k: true

    // => e . 5. undefined === null

    let l=undefined; let m= null;
    const n=l===m
    //   console.log("n:", n)  n: false
      
//   => f. 6. null == "\n0\n"

let o=null; let p="\n0\n";
const q= o==p
// console.log("q:", q)  q: false
// => g  7. null === +"\n0\n"

let r=null; let s= "\n0\n";
  const t=r=== +s
//   console.log("t:", t) t: false


// 3.● Will alert be shown?   if ("0") { alert( 'Hello'); }
     function fun3(params) {
        if ("0") { alert( 'Hello'); }
     }  
    //  fun3()  result :hello
// 4.● What is the code below going to output? alert( null || 2 || undefined );

     function fun2(params) {
        alert( null || 2 || undefined );
     }
    //  fun2()  result:2


//  5.● The following function returns true if the parameter age is greater than
// 18. Otherwise it asks for a confirmation and returns its result:
   
// function checkage(age) {
//     if(age>18){
//         return true;
//     }else{
//         return confirm ("did parents allow you?");
//     }
// }
// let print2= checkage(17)
// console.log("print2:", print2)

// 6. ● Replace Function Expressions with arrow functions in the code below:Function
// Function
// ask(question, yes, no)
// { if (confirm(question))yes();
//     else
//     no();
//     }
//     ask("Do you agree?", function()
//     { alert("You agreed."); },
//     function() {
//     alert("You canceled the execution."); }
    
    
//     )

//   let fun4=(question, yes, no)=>{
//    if(confirm(question))yes();
//    else
//     no();
//   } fun4("Do you agree?", function()
//   { alert("You agreed."); },
//   function() {
//   alert("You canceled the execution."); }
  
  
//   )

//  fun4()


// Data Types and Objects

// 1.● Write the code, one line for each action:
    // =>a.Create an empty object user.
    let user = {};

    // => b) Add the property name with the value John.
    user.name = "John";
    // => c) Add the property surname with the value Smith.
    user.surname = "Smith";
    // =>Change the value of the name to Pete.


    // =>e) Remove the property name from the object


    //2 ● Is array copied?
    let fruits = ["Apples", "Pear", "Orange"]; 
    let shoppingCart = fruits;
    shoppingCart.push("Banana")
    // console.log("shoppingCart:", shoppingCart)
    
    // console.log("fruits:", fruits)
    // alert( fruits.length );  result :4

    //3 ● Map to names

    let john = { name: "John", age: 25 }; 
    let pete = { name: "Pete", age: 30 }; 
    let mary ={ name: "Mary", age: 28 }; 
    let users = [ john, pete, mary ]; 

    let names =users[0]
    // alert( names )

    //5 .Sum the properties There is a salaries object with arbitrary number of salaries. Write
// the function sumSalaries(salaries) that returns the sum of all salaries using
// Object.values and the for..of loop.If salaries is empty, then the result must be 0.
 


    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
      };
    function sumSalaries(salaries) {
        let sum = 0;
        for (let salary of Object.values(salaries)) {
          sum += salary;
        }
        return sum;
      }  
    //   alert(sumSalaries(salaries))

    //6. ● Destructuring assignment We have an object: Write the Destructuring assignment that reads:
    // a) Name property into the variable name.
    // b) Year’s property into the variable age.
    // c) isAdmin property into the variable isAdmin (false, if no such property)
    // d) let user = { name: "John", years: 30};
      
    let user1 = { name: "John", years: 30};

let {name,age,admin}=user1
    // console.log("name:", name)
    // console.log("age:", age)
    // console.log("admin:", admin)
    
// 7.Turn the object into JSON and back Turn the user into JSON and then read it back
// into another variable.
user = { name: "John Smith", age: 35};

// Turn the object into JSON
let userJSON = JSON.stringify(user);

// Read it back into another variable
let newUser = JSON.parse(userJSON);

// Check if the two objects are equal
console.log(user.name === newUser.name && user.age === newUser.age)
  
    

// New Request
// 1.● What is JSON

// JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

// 2. ● What is promises
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// 3. ● Write a program of promises and handle that promises also
    
const h1= new Promise((resolve,rejeact)=>{
  const arr=[1,2,3,4,5]
    let exist =arr.includes(50)
    if (exist) {
        resolve("5 is avalible")
        
     }else{
         rejeact("5 is not in array")
     }
     console.log("newPromise ~ exist:", exist)
 })
 h1.then((res)=>{
 console.log("=======>res",res);
 })
 .catch((error)=>{
    console.log("======>error",error);
 })