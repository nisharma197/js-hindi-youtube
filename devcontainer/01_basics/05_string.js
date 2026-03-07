const name = "nisha"
const repoCount = 50

console.log(name + " has " + repoCount + " value"); // dont do this 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String("pratham-krihna-yadav")
console.log(typeof gameName); // object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const myString = "    hello world     "
console.log(myString);
console.log(myString.trim());

const url = "https://www.youtube.com/nisha20%20sharma"

console.log(url.replace("%20", "-"));

console.log(url.includes("pratham"));

console.log(gameName.split("-"));



