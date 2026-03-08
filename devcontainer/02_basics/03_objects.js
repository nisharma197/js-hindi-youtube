// singleton 

// object literal
const mySum = Symbol("key1");

const jsUser = {
    name : "Nisha",
    age : 21,
    [mySum] : "hello",
    location : "India",
    email : "nisha@example.com",
    isMarried : false,
    hobbies : ["coding", "traveling", "cooking"],

}

// console.log(jsUser.name);
// console.log(jsUser["email"]);

// console.log(jsUser[mySum]);
// console.log(typeof mySum);

jsUser.email = "nisha@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@gmail.com"
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello i am nisha");
}
jsUser.greetingTwo = function(){
    console.log(`hello i am ${this.name} and i am ${this.age} years old`);
}

console.log(jsUser.greetingTwo());

