const userEmail = []

if (userEmail) {
    console.log(" got user email");
} else {
    console.log("don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 == 5 ?? 10 // output is 5
// val1 == null ?? 10 // output is 10
// val1 = null ?? 10 ?? 20 // output is 10

console.log(val1);

// terniary operator
// condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("less than 80") : console.log("more than 80")