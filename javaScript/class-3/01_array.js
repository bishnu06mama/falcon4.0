// Array:-
//An Array in js is a data structure to store multiple values of any type of under a single name, including number,string,array and objects.
// An array is a collection of items stored at a contiguous memory location.
// An array is a zero-indexed meaning it starts from index 0.


//Create an array:-

//earlier-
let num1 = 100;
let num2 = 488;
let num3 = 367;

//now-
let myArray = [num1, num2, num3];
console.log(myArray);

let mixedArray = ["bishnupriya", "smruti", "bulbu", 87, 543, "mama", "manu"];
console.log(mixedArray);

// Accessing elements :

console.log(mixedArray.length); // 7
console.log(mixedArray[3]);

// in optimized way

// Print me the last value of randomArray
console.log(mixedArray[3]);
console.log(mixedArray[mixedArray.length - 1]);

// Modifying the element :

mixedArray[1] = "Smruti-pratik";
console.log(mixedArray);

mixedArray[3] = 19;
console.log(mixedArray);

// Array Methods :

// Push method :
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

let bikes = ["Pulsar", "Ninja", "KTM", "Harley", "Triumph"];
console.log(bikes);
console.log(bikes.length);

bikes.push("Beneli");
console.log(bikes);
console.log(bikes.length);

// Pop method :
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(bikes.pop()); // Triumph
console.log(bikes.pop()); // Beneli
console.log(bikes.pop());
console.log(bikes.pop());
console.log(bikes);
