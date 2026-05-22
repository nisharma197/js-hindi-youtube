// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString() );
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 24)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date('2023-01-24')
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 24, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() = 1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
}))

