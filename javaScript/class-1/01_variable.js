// Declare a variable

let num= 10;
console.log("The output is:", num); // to print the output

let Num = 1000;
console.log("the otput of Num:", Num)
//let second num is = 1000;

//let 01num = 50; it does not allowed in the beginning
 //snake_case
let second_num = 1000; 
//camelcase
let secondNum = 1000; 

let decimal_num = 17.6669;
console.log(decimal_num);
 // to check data types use 'typeof' operator
 console.log(typeof decimal_num);


 // String:
 //1. String is a coolection of characters.
 //2. Srting is a primitive data type.

 let name = "Bishnupriya Nayak";
 console.log("my name is", name);
 //``-Backtick
 console.log(`My name is: ${name}`);
 console.log(typeof name);

 // Fun fact:
 let number = "100";
 console.log(typeof number);//output: string

 let string = 367;
 console.log(typeof string);//output: number



 // BigInt :

// BigInt is a new data type in JavaScript that can represent integers of any size. It is used to store integers that are too large or too small.

let bigInt = 1000000000000000;
console.log(bigInt);

// Null :

let result = null; // null : void / empty;
console.log(typeof result); // null

// Undefined :

// let value = undefined;
let value; // nothing is assigned.
console.log(value); // undefined
console.log(typeof value); // undefined

// Boolean :

let isMarried = false;
console.log(typeof isMarried); // boolean
console.log(!isMarried); // true

// Symbol :

// Symbol is a data types in JS to produce unique key values and it's introduced in ES6.
// It is used to create unique identifiers for objects.

let symbol1 = Symbol("abc"); // differnet value
let symbol2 = Symbol("def"); // differnet value
console.log(symbol1 === symbol2); // false

console.log(symbol1.description);
console.log(symbol2.description);
