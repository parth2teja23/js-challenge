// Primitive datatype


// 7 types - String, number, boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100;
const isLoggedIn = false;
let userEmail;
const id = Symbol("1234");
const anotherId = Symbol("1234");
console.log(id === anotherId);

const bigNumber = 1234567890123456789012345678901234567890n;


// Reference (Non primitive type):
// Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
const myObj = {
  name: "Nikhil",
  age: 24,
};

function myFunction(){
    console.log("Hello World");
}

console.log(typeof(heros));
console.log(typeof(myObj));
console.log(typeof(myFunction));
console.log(typeof bigNumber);