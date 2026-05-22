const marvel_heros = ['Ironman', 'Spiderman', 'Thor', 'Hulk']
const dc_heros = ['Superman', 'Batman', 'Flash', 'Green Lantern']

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros2 = [...marvel_heros, ...dc_heros]
// console.log(all_heros2);

const another_arr = [1, 2, 3[4, 5], 6[7, 8[9, 10]]]
const new_another_arr =another_arr.flat(Infinity)
// console.log(new_another_arr);

console.log(Array.isArray("nisha"))
console.log(Array.from("nishasharma"))
console.log(Array.from({name: "nisha", age: 23})) // interesting

const score1 = [1, 2, 3, 4, 5]
const score2 = [6, 7, 8, 9, 10]
const score3 = [11, 12, 13, 14, 15]

console.log(Array.of(score1, score2, score3))
console.log(JsUser.greeting());




