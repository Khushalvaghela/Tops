function typeoff(input) {
    if (input === 1) {
        return "One"; 
    } else if (input === 2) {
        return 2; 
    } else if (input === 3) {
        return true; // boolean
    } else {
        return { key: "value" }; //obj
    }
}

const result1 = typeoff(1);
console.log(typeof result1); 

const result2 = typeoff(2);
console.log(typeof result2);

const result3 = typeoff(3);
console.log(typeof result3); 

const result4 = typeoff(4);
console.log(typeof result4); 
