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

// What is a "closure" in JavaScript? Provide an example.

// option 1
// const a = 1;

// const outerFunction = () => {
//   const b = 2;
//   const innerFunction = () => {
//     const c = 3;
//     return a + b + c;
//   };
//   return innerFunction();
// };

// console.log(outerFunction());

// option 2
// var globalVar = "abc";

// (function outerFunction(outerArg) {
//   // begin of scope outerFunction
//   var outerFuncVar = "x";
//   // Closure self-invoking function
//   (function innerFunction(innerArg) {
//     // begin of scope innerFunction
//     var innerFuncVar = "y";
//     console.log(
//       `outerArg = ${outerArg}
// outerFuncVar = ${outerFuncVar}
// innerArg = ${innerArg}
// innerFuncVar = ${innerFuncVar}
// globalVar = ${globalVar}
// `
//     );
//   })(5); // end of scope innerFunction; // Pass 5 as parameter
// })(7); // end of scope outerFunction; // Pass 7 as parameter

// ----------------------------------------

// Write a mul function which will produce the following outputs when invoked:
// console.log(mul(2)(3)(4)); //output :24
// console.log(mul(4)(3)(4)); //output :48

// const mul = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };
// console.log(mul(2)(3)(4)); //output :24
// console.log(mul(4)(3)(4)); //output :48

// ----------------------------------------
// How to empy an existing array?

// const arr = [1, 2, 3, 4];
// console.log(arr);

// // option 1
// arr.length = 0;
// console.log(arr); // []

// // option 2
// while (arr.length) {
//   arr.pop();
// }
// console.log(arr); // []

// // options that retrun a new array so that they don't empty the initial array

// arr.splice(0, arr.length);

// console.log(arr);
// .splice() function will return an array with all the removed items, it will actually return a copy of the original array.

// ----------------------------------------

// What will be the output of the following code?
// var output = (function (x) {
//   delete x;
//   return x;
// })(0);
// console.log(output);

// ----------------------------------------
// What is the difference between the function declarations below?

// var foo = function () {
//   // Some code
// };

// function bar() {
//   // Some code
// }

// foo(); // TypeError: foo is not a function
// var foo = function () {
//   console.log("foo - function expression");
// };
// foo();

// bar(); // bar - function declaration
// function bar() {
//   console.log("bar - function declaration");
// }

// ----------------------------------------

// What will be the output of the code below?
// (function () {
//   var a = (b = 5);
// })();
// console.log(b); // 5

// ----------------------------------------

// What’s the result of executing this code and why?
// function test() {
//   console.log(a); // undefined
//   console.log(foo()); // 2
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();
// console.log(test()); // undefined

// // to make it works
// function test() {
//   console.log(a); // undefined
//   console.log(foo()); // 2
//   var a = 1;
//   function foo() {
//     return 2;
//   }
//   return foo();
// }
// test();
// console.log(test()); // 2

// ----------------------------------------

// Get unique characters from a string.

// const getUniqueChar = (inputString) => {
//   const array = [...inputString];
//   const uniqueArray = array.filter((el, index) => {
//     console.log(
//       "array.indexO(el)",
//       array.indexOf(el) + " el:",
//       el + " index",
//       index
//     );
//     return array.indexOf(el) === index;
//   });
//   return uniqueArray.join("");
// };

// const text = "aaaabbcccd";
// console.log(getUniqueChar(text));

// ----------------------------------------
// Count Duplicate Values in an Array in JavaScript. Return object.

// option 1
// const countDuplicates = (array) => {
//   let counts = {};
//   array.forEach((el) => {
//     return (counts[el] = counts[el] + 1 || 1);
//   });
//   return counts;
// };

// const values = ["a", "b", "a", "c", "b", "a", "d"];
// console.log(countDuplicates(values));
// // {a: 3, b: 2, c: 1, d: 1}

// option 2
// const counter = (array) => {
//   return array.reduce((total, letter) => {
//     total[letter] ? total[letter]++ : (total[letter] = 1);
//     return total;
//   }, {});
// };
// console.log(counter(["a", "a", "b", "b", "b", "f", "f", "f", "r", "r"]));
// // {a: 2, b: 3, f: 3, r: 2}

// option 3

// const getFrequency = (array) => {
//   const frequency = {};
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (frequency[element]) {
//       frequency[element]++;
//     } else {
//       frequency[element] = 1;
//     }
//   }
//   return frequency;
// };

// const values = ["a", "b", "a", "c", "b", "a", "d"];
// console.log(getFrequency(values));
// {a: 3, b: 2, c: 1, d: 1}

// ----------------------------------------

// Counting frequency of characters in a string using JavaScript. return value - object

// // option 1

// const getFrequency = (string) => {
//   const frequency = {};
//   [...string].forEach((item) => {
//     if (frequency[item]) {
//       frequency[item]++;
//     } else {
//       frequency[item] = 1;
//     }
//   });
//   return frequency;
// };

// //  option 1.1
// const getFrequency = (string) => {
//   const frequency = {};
//   [...string].forEach((item) => {
//     frequency[item] ? frequency[item]++ : (frequency[item] = 1);
//   });
//   return frequency;
// };

// console.log(getFrequency("aaccbaaabrrrddrrr"));

// // option 2
// const getFrequency = (string) => {
//   var freq = {};
//   for (let i = 0; i < string.length; i++) {
//     let character = string.charAt(i);
//     if (freq[character]) {
//       freq[character]++;
//     } else {
//       freq[character] = 1;
//     }
//   }
//   return freq;
// };

// // option 2.2
// const getFrequency = (string) => {
//   var freq = {};
//   for (let i = 0; i < string.length; i++) {
//     let character = string.charAt(i);
//     freq[character] ? freq[character]++ : (freq[character] = 1);
//   }
//   return freq;
// };

// console.log(getFrequency("indivisibilities"));
// // {i: 7, n: 1, d: 1, v: 1, s: 2, …}

// ----------------------------------------
// Mając string „aaabbccccdd” zwróć string „a3b2c4d2”.

// const getFrequency = (string) => {
//   const freq = {};
//   [...string].forEach((character) => {
//     freq[character] ? freq[character]++ : (freq[character] = 1);
//   });
//   const freqString = Object.entries(freq);
//   // .map(([key, value]) => {
//   //   return `${key}:${value}`; //['a:4', 'b:2', 'c:3', 'd:1']
//   // })
//   // .join(", "); // a:4, b:2, c:3, d:1
//   return freqString;
// };

// console.log(getFrequency("aaaabbcccd"));
// a:4, b:2, c:3, d:1
