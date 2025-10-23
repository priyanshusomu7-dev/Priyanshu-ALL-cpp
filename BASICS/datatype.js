// JavaScript is a dynamic programming language. 
// It allows variables to change type at runtime and supports flexible object handling.

"use strict"; // treat all JS code as newer version

// alert(3+3) => We are using Node.js not Browser this will not work.

let age = 20
let isLoggedIn = false
let state = "Bihar"

// PRIMITIVE DATATYPES :-
// Boolean => true and false.
// null => A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
// undefined =>A top-level property whose value is not defined.
// Number => An integer or floating point number. For example: 42 or 3.14159.
// BigInt =>  An integer with arbitrary precision. For example: 9007199254740992n.
// String => A sequence of characters that represent a text value. For example: "Howdy".
// Symbol => A data type whose instances are unique and immutable.

console.log(typeof null)
console.log(typeof Number)
console.log(typeof undefined)
console.log(typeof Boolean)
console.log(typeof String)
console.log(typeof Symbol)
console.log(typeof BigInt)

// REFRENCE (NON PRIMITIVE DATATYPES) :-
// Objects 
let myObj = {
    name : "Priyanshu"
}
// Array =>
const heroes = ["Shaktiman","Spiderman","Deadpool"];

// Functions =>
const myFunction = function(){
    console.log("Hey I'm learning JavaScript.");
}

