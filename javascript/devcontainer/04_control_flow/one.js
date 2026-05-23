// if statment
const isUserloggedIn = true
const temperature = 41

// if (2 === "2"){ // type checking
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===

// if (temperature < 50){ 
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// const balance = 600

// // if (balance > 500) console.log("test"); // shorthand

// if (balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debitcard && 2==2) {
    console.log("allow to buy  course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}