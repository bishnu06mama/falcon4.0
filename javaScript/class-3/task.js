//todo? Print your birthday in the console using the Date object.

//let myBdy = new Date('06-09-2000');
//console.log(myBdy);
 //todo? Print the current time in the console using the Date object.
 let toDate = new Date();
 console.log(toDate.getTime());

 //todo? Print your current age in the console using the Date object.

 myDate = new Date();
 console.log( myDate.getFullYear() - 2000);

 //What does the push method do in JavaScript arrays?
// ANS= push method put the element into the array.

//Q: What does the pop method do in JavaScript arrays?
//ANS= pop method delete the element from the array.
//- Q: Given the array let fruits = ["apple", "banana", "mango"];, what will be the result of fruits.push("orange");?

let fruits = ["apple", "banana", "mango"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);


//- Q: Given the array let numbers = [1, 2, 3, 4, 5];, what will let last = numbers.pop(); do?
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.pop());

//Q: What will the following code output?
let colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);
console.log(colors.pop());
console.log(colors);


//Q: What will be the result of the following code?
//let stack = [876, 8 , 97, 990, 875, 9735,894, 84133];
//stack.push(1);
//console.log(stack);
//stack.push(2);
//console.log(stack);
//stack.push(3);
//console.log(stack);

let stack = [9, 78, 45, 876, 43, 864, 9427, 9245];
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//Q: Explain the following code:
let letters = ["a", "b"];
letters.push("c", "d");
console.log(letters);
let lastLetter = ["priya", "smruti", "babe"];
console.log(lastLetter.pop());
console.log(letters);
console.log(lastLetter);

//Q: How can you add multiple elements to the end of an array in one push call?
let birds = ["pigeon", "parrot", "peacock", "swan"];
console.log(birds);
birds.push("crow", "ostrich", "duck", "dove")
console.log(birds);



 

