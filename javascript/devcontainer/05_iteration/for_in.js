const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
// for (const key in myObject) {
//     console.log(key);
// } prints only key

// for (const key in myObject) {
//     console.log(myObject[key]);
// } // print only value

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {
    //console.log(programing[key]);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "united states of america")
map.set("FR", "France")
map.set("IN", "India")

for (const key in map) {
   // console.log(key);
} // this is not itreatable
