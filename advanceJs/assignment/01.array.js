// -> make one array who have value from 1 to 10

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. print 9th and 10th index of array

function FindIndex(array) {
    let Index = array[9]
    return Index
}
console.log("array:", FindIndex(array))
function FindIndex1(array) {
    let Index1 = array[10]
    return Index1
}
console.log("array:", FindIndex1(array))

// 2. print every element of array by map and for loop

function Printarray() {
    array.forEach((e) => {
        return e
    })
    return array
}
console.log("Printarray ~ array:", Printarray(array))

function PrintarrayMap() {
    array.map((e) => {
        return e
    })
    return array
}
console.log("PrintarrayMap ~ array:", PrintarrayMap(array))

// 3. change a value of 6th index with 100

function chngvalue(a) {
    array[a] = 100;
    console.log("chnVal:", array)
}
chngvalue(6)

// 4. print a array till element value not grater then 100

function GratrValue(a) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == a) {
            break;
        }
        console.log("print a array till element value not grater then 100", array[i]);
    }
}
GratrValue(100)


// 6. add 0 in start of array

function AddValue(a) {
    array.unshift(a)
    console.log("unshiftarray:", array)
}
AddValue(0)

// 7. add  99 in end of array

array.push(99)
console.log(" add 99 in array:", array)

// 8. remove 1 element from start of  array

array.shift()
console.log("shiftarray:", array)

// 9. remove 1 element from end of array

array.pop()
console.log(" remove 1 element in array:", array)


// 10. do sum of all value of an array with use of map, reduce and for-loop

function Sum() {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}
console.log('for loop: ', Sum(array));

// 11. sort a array in acending decending

function Sort() {
    let Sortarray = array.sort((a, b) => a - b)
    return Sortarray
}
console.log("Sortarray:", Sort())



// 12. reverce an array with use of method

array.reverse()
console.log("reverce array with reverce method :", array)

// 13. reverce an array with use of for-loop

let reversed_array = []
for (let i = array.length - 1; i >= 0; i--) {
    reversed_array.push(array[i]);
}

console.log("reversed_array with use of for loop :", reversed_array)

// [1,2,3] => [3,2,1] [2,1]

