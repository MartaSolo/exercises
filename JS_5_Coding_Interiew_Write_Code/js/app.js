// Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

// // option 1
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(2, 3)); // 5

// // option 2
// const sum = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
// console.log(sum(2)(3)); // 5

// ----------------------------------------
// Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.

// option 1
// const isPalindrome = (string) => {
//   if (string.split("").reverse().join("") === string) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // option 2
// const isPalindrome = (string) => {
//   return string.split("").reverse().join("") === string ? true : false;
// };

// console.log(isPalindrome("kajak")); // true
// console.log(isPalindrome("kot")); // false

// ----------------------------------------

// Given the following array, build me an array of cars with those colours:
// var colors = ["blue", "black", "red"];
// var cars = ...;
// Answer:

// var colors = ["blue", "black", "red"];

// function Car(color) {
//   this.type = "car";
//   this.color = color;
// }

// const cars = colors.map((color) => {
//   return new Car(color);
// });
// console.log("cars", cars);

// [Car, Car, Car]
// 0: Car {type: 'car', color: 'blue'}
// 1: Car {type: 'car', color: 'black'}
// 2: Car {type: 'car', color: 'red'}

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------

// ----------------------------------------
