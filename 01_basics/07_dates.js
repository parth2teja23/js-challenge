// console.log(Temporal.now.instant()); // not working as of now


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);


// let newDate = new Date(2025, 0, 1)
// console.log(newDate.toDateString());


// let myCustomDate = new Date("03-23-2006")
// console.log(myCustomDate.toDateString());


// let timeStamp = Date.now()
// console.log(Math.floor(timeStamp / 1000)); 


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);


console.log(newDate.toLocaleString('en-IN', {weekday: 'long'}));
console.log(newDate.toLocaleString('en-IN', {day: 'numeric'}));
console.log(newDate.toLocaleString('en-IN', {month: 'long'}));
console.log(newDate.toLocaleString('en-IN', {year: 'numeric'}));
