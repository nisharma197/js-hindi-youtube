// let a = 10
// const b = 20
// var c = 30 
let a = 100 // global scope

if (true) {
    let a = 10
    const b = 20 
    var c = 30 // block scope
    console.log("inener: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // it should'nt print but this is print

function one(){
    const username = "nisha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
 one()

 if (true) {
    const username = "nisha"
    if (username === "nisha"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
 }
//  console.log(username);

// *****************interesting***********************
console.log(addOne(5))
function addOne(num){
    return num + 1
}


// addTwo(5) error 
const addTwo = function(num){ // is also called expersion
    return num + 2 
}

console.log(addTwo(5)) // this is hosting