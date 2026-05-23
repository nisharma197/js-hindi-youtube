const user = {
    username : "nisha",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this method is refer of context
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = " sam "
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "nisha"// this is not working inside the function
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//      let username = "nisha"// this is also not working inside the function
//     console.log(this.username);
// }
// chai()

const chai = () => {
     let username = "nisha"// this is also not working inside the function
    console.log(this.username);
}
// chai()

// () => {} // this is arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explict return
// } // basic arrow function

// const addTwo = (num1, num2) =>  num1 + num2 // implict return

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "nisha"}) 

console.log(addTwo(3, 4))