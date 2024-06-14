//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 34565565865888795566n



//  Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "amit",
    age: 27,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-interbational.org/5.1/#sec-11.4.3
