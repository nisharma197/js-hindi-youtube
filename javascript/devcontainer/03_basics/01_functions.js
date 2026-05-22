// function sayMyName(){
//     console.log("N");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, "a")

// function addNumbers(num1, num2){
//     // let result = num1 +num2;
//     // console.log("nisha");
//     // return result
//     return num1 +num2
// }

// const result = addNumbers(3,9)
// console.log("Result: ", result);

// function loginUserMessage(username = "sam"){
//     // if(username === undefined)
//     if(!username){
//         console.log("please enter a username");
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("nisha"))
// console.log(loginUserMessage("nisha"))// undefined

// function calculateCarPrice(val1, val2, ...num1){ // rest operator
//     return num1
// }

// console.log(calculateCarPrice(200, 400, 300, 500))

const user = {
    username: "nisha",
    price: 200,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 400
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 400, 500, 600]));