// Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 27, 4, 58);
// let myCreatedDate = new Date("2025-01-27");
let myCreatedDate = new Date("01-27-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));




