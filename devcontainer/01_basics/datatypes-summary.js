// primitive 

// 7 types : string, number, boolean, null, undefined, symbol, Bigint

const score = 100;
const scoreValue = 100.1;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; 

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false
//  const bigNumber = 9007199254740991n;

// Reference types/ non-primitive

// array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "nisha",
    age: 21,
    isMarried: false,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof scoreValue);
console.log(typeof myFunction);

// ++++++++++++ memory +++++++++++++++++

// stack (primitive), heap(non-primitive)

let myname = "nisha"

let anotherName = myname
anothername = "nisha sharma"

console.log(myname);
console.log(anotherName);

let userOne = {
    name: "nisha",
    age: 21,
}

let userTwo = userOne
userTwo.name = "nisha sharma"

console.log(userOne.name);
console.log(userTwo.name);
