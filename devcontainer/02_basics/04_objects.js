// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nisha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@example.com",
    fullname : {
        userFullName : {
            firstname : "Nisha",
            lastname : "Sharma"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const user = [
    {name: "Nisha", age: 21},
    {name: "Hitesh", age: 25},
    {name: "Rohit", age: 30}, 
    {name: "Anjali", age: 28}
]

user[1].name 
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));


