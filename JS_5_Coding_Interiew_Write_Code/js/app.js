// 1. Write a sum method which will work properly when invoked using either syntax below.
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

// 2. Write a mul function which will produce the following outputs when invoked:
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

// 3. Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.

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

// 4. Given the following array, build me an array of cars with those colours:
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

// 5. What is a "closure" in JavaScript? Provide an example.

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

// 6. How to empy an existing array?

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

// 7. Get unique characters from a string.
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

// 8.Count Duplicate Values in an Array in JavaScript.
// Count Duplicate Values in an Array in JavaScript

// option 1.1
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

// option 1.2
// const countDuplicates = (array) => {
//   let counts = {};
//   array.forEach((el) => (counts[el] ? counts[el]++ : (counts[el] = 1)));
//   return counts;
// };

// const values = ["a", "b", "a", "c", "b", "a", "d"];
// console.log(countDuplicates(values));
// {a: 3, b: 2, c: 1, d: 1}

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
// Count duplicates in string and return a string:
// Mając string „aaabbccccdd” zwróć string „a3b2c4d2”.

// version 1
// const countStringDuplicates = (string) => {
//   const obj = {};
//   [...string].forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
//   const arr = Object.entries(obj).flat();
//   return arr.join("");
// };

// const text = "aaaabbcccd";
// console.log(countStringDuplicates(text)); // a4b2c3d1

// verion 2

// const count = (string) => {
//   const arr = [...string];
//   const arrUnique = [];
//   console.log(arrUnique);
//   let count = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       count++;
//       // console.log(arrUnique);
//       // arrUnique.push(arr[i]);
//       // arrUnique.push(count);
//     } else {
//       count = 1;
//     }
//     arrUnique.push(arr[i]);
//     arrUnique.push(count);
//   }
//   return arrUnique;
// };
// console.log(count(text));

// ----------------------------------------

// 9. Count Duplicate Values in a String in JavaScript. Return object.
// Counting frequency of characters in a string using JavaScript. return value - object

// function getFrequency(string) {
//   var freq = {};
//   for (var i = 0; i < string.length; i++) {
//     var character = string.charAt(i);
//     if (freq[character]) {
//       freq[character]++;
//     } else {
//       freq[character] = 1;
//     }
//   }
//   return freq;
// }

// console.log(getFrequency("Indivisibilities"));

// ----------------------------------------

// 12. Sum of Array Plus One
// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
// v1
// const sumArrayPlusInteger = (array, integer) => {
//   const arr = array.map((el) => el + integer); // arr: [2, 3, 4, 5, 6, 7]
//   return arr.reduce((acc, curr) => acc + curr);
// };

// v2
// const sumArrayPlusInteger = (array, integer) => {
//   return array.map((el) => el + integer).reduce((acc, curr) => acc + curr);
// };

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(sumArrayPlusInteger(arr, 1)); // 27

// ----------------------------------------

// 13. String rotation
// Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.

// v1
// const stringRotation = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const str1Rotated = str1.substr(1) + str1.substr(0, 1);
//   return str1Rotated === str2 ? true : false;
// };

// console.log(stringRotation("ABCD", "BCDA"));

// // v2
// const stringRotation = (string1, string2) => {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   const string1Rotated = string1.slice(1) + string1.slice(0, 1);
//   if (string1Rotated === string2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(stringRotation("ABCD", "BCDA")); // true
// console.log(stringRotation("ABCD", "ACBD")); // false

// ----------------------------------------

// 14. oddball sum - sum of odd numbers
// Write a function called oddballSum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

// v1 - with reducer
// v1 a
// const oddballSum = (array) => {
//   const filteredArray = array.filter((el) => el % 2 === 0); // [2, 4, 6]
//   return filteredArray.reduce((acc, curr) => acc + curr);
// };
// // v1 b
// const oddballSum = (array) => {
//   return array.filter((el) => el % 2 === 0).reduce((acc, curr) => acc + curr);
// };

// v2 - without reducer
// const oddballSum = (array) => {
//   let sum = 0;
//   array.filter((el) => el % 2 === 0).forEach((el) => (sum += el));
//   return sum;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(oddballSum(arr)); //12

// ----------------------------------------

// 15. Simple clock angle
// You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.

// const clockAngle = (number) => {
//   const angleByMinute = 360 / 60;
//   return number * angleByMinute;
// };

// console.log(clockAngle(10));
// console.log(clockAngle(20));
// console.log(clockAngle(30));

// ----------------------------------------

// 16. Test divisors of three
// You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

// const divisorsOfThree = (num1, num2) => {
//   for (let i = num1 + 1; i < num2; i++) {
//     if (i % 3 === 0) {
//       console.log(i + " div3");
//     } else {
//       console.log(i);
//     }
//   }
// };

// console.log(divisorsOfThree(2, 9));
// console.log(divisorsOfThree(12, 20));

// ----------------------------------------

// 17. Sum of several arrays
// You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22 . Solve without and with reduce.

// // v1
// // v1 a
// const nestedArraySum = (array) => {
//   const arr = array.flat(); // [3, 2, 1, 4, 12]
//   console.log(arr);
//   return arr.reduce((acc, curr) => acc + curr);
// };

// // v1 b
// const nestedArraySum = (array) => {
//   return array.flat().reduce((acc, curr) => acc + curr);
// };

// // v2
// const nestedArraySum = (array) => {
//   const arr = [];
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       arr.push(array[i][j]);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const arr = [[3, 2], [1], [4, 12]];

// console.log(nestedArraySum(arr)); // 22

// ----------------------------------------

// 18. Lucky seven
// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

// const luckySeven = (array) => {
//   if (array.length < 3) {
//     return false;
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] + array[i + 1] + array[i + 2] === 7) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// const arr1 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr3 = [1, 2];

// console.log(luckySeven(arr1));
// console.log(luckySeven(arr2));
// console.log(luckySeven(arr3));

// ----------------------------------------

// 19. Given a string, reverse each word in the sentence.
// For example Welcome to this Javascript Guide! should be become: emocleW ot siht tpircsavaJ !ediuG

// const reverseSentence = (string) => {
//   return string
//     .split(" ")
//     .map((el) => el.split(""))
//     .map((el) => el.reverse())
//     .map((el) => el.join(""))
//     .join(" ");
// };

// const str = "Welcome to this Javascript Guide!";
// console.log(reverseSentence(str));
// emocleW ot siht tpircsavaJ !ediuG

// ----------------------------------------

// 20. Callabck function example:

// example 1

// const calculate = (array, callback) => {
//   array.push(5);
//   callback(array);
// };

// const dispaly = (arr) => {
//   return arr.forEach((el) => console.log(el));
// };

// calculate([1, 2, 3, 4], dispaly);

// example 2

// const isEven = (number) => number % 2 === 0;

// const filterArray = (array, callback) => {
//   let result = [];
//   array.forEach((el) => {
//     if (callback(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// console.log(filterArray([1, 2, 3, 4, 5, 6], isEven));

// example 3 - with anonymous function and event listener

// const button = document.querySelector(".btn");
// const counter = document.querySelector(".counter");
// let count = 0;

// button.addEventListener("click", () => {
//   count++;
//   console.log(count);
//   counter.innerText = count;
// });

// ----------------------------------------

// 21. Make it work:
// duplicate([1, 2, 3, 4]); // [1, 2, 3, 4, 1, 2, 3, 4]

// const duplicate = (array) => {
//   return [...array, ...array];
// };

// console.log(duplicate([1, 2, 3, 4]));
// //  [1, 2, 3, 4, 1, 2, 3, 4]

// ----------------------------------------

// 22. Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

// const missingNumber = (array, minElement, maxElement) => {
//   const arr = [...array].sort((a, b) => a - b);
//   console.log(arr); //   [2, 3, 5, 6, 7, 8]
//   let missing = 0;
//   for (let i = minElement; i <= maxElement; i++) {
//     if (!arr.includes(i)) {
//       missing = i;
//     } else {
//       missing === null;
//     }
//   }
//   return missing !== 0 ? missing : null;
// };

// console.log(missingNumber([2, 7, 3, 5, 6, 8], 2, 8)); // 4
// console.log(missingNumber([2, 7, 3, 5, 6, 8, 4], 2, 8)); // null
// ------------------

// 23. Znajdz brakujący element w array skłądającej się z rosnących liczb całkowitych;

// const getMissingElement = (array) => {
//   let min = Math.min(...array);
//   let max = Math.max(...array);
//   let missing = 0;
//   for (let i = min; i <= max; i++) {
//     !array.includes(i) ? (missing = i) : missing === null;
//   }
//   return missing !== 0 ? missing : null;
// };

// console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15])); // 9

// ----------------------------------------

// 24. Remove duplicates in an array and return an array of unique numbers.

// const removeDuplicates = (array) => {
//   const arr = [...array].sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates([3, 3, 1, 2, 6, 6, 5, 2]));
// [1, 2, 3, 5, 6]

// ----------------------------------------

// 25. Empty an array

// 1 way
// const array = ["a", "b", "c", "d", "e"];
// array.length = 0;
// console.log(array); // []

// 2 way
// const arr = ["a", "b", "c", "d", "e"];
// arr = [];
// //TypeError: Assignment to constant variable.

// let arr = ["a", "b", "c", "d", "e"];
// arr = [];
// console.log(arr);

// 3 way
// const arr = ["a", "b", "c", "d", "e"];

// arr.splice(0, arr.length);
// console.log(arr); // []

// 4 way
// const arr = ["a", "b", "c", "d", "e"];

// while (arr.length) {
//   arr.pop();
// }
// console.log(arr); // []

// ----------------------------------------
// 26. How to check if array is array?

// const data = [1, 2, 3, 4, 5];
// const char = "b";

// console.log(Array.isArray(data));
// console.log(Array.isArray(char));

// ----------------------------------------

// 26. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// const findTwoSum = (array, target) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// };

// console.log(findTwoSum([3, 2, 4, 5, 7, 8], 5)); //  [0, 1]
// console.log(findTwoSum([3, 2, 4, 5, 7, 8], 12)); // [2, 5, 3, 4]
// console.log(findTwoSum([3, 2, 4, 5, 7, 8], 7)); // [0, 2, 1, 3]

// ----------------------------------------

// 27. Determine overlapping numbers in ranges

// const ovrelappingRanges = (array) => {
//   const [minFirst, maxFirst, minSec, maxSec, target] = array;

//   const first = [];
//   const second = [];
//   const overlapping = [];

//   for (let i = minFirst; i <= maxFirst; i++) {
//     first.push(i);
//   }

//   for (let i = minSec; i <= maxSec; i++) {
//     second.push(i);
//   }

//   for (let i = 0; i < first.length; i++) {
//     for (let j = 0; j < second.length; j++) {
//       if (first[i] === second[j]) {
//         overlapping.push(first[i]);
//       }
//     }
//   }

//   if (overlapping.length >= target) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(ovrelappingRanges([10, 20, 4, 14, 4]));
// console.log(ovrelappingRanges([10, 20, 4, 14, 6]));
// ----------------------------------------

// 28. How would you check if a number is an integer?

// const isInteger = (number) => {
//   return number % 2 === 0;
// };

// console.log(isInteger(2));
// console.log(isInteger(2.5));
// console.log(isInteger(2.9));

// ----------------------------------------

// Find unique numbers in the array and return the array.
// [1,1,2,2,3] gdzie jedynki i dwójki mają parę a liczba 3 jest bez pary. To tylko przykład, może być tez coś takiego [1,1,2,3,4,4] gdzie dwójka i trójka nie ma pary.

// version 1
// const findUnique = (array) => {
//   let obj = {};
//   array.forEach((el) => (!obj[el] ? (obj[el] = 1) : obj[el]++));
//   let arr2D = Object.entries(obj).filter((el) => el[1] === 1);
//   let result = arr2D.map((el) => el[0]);
//   return result;
// };

// console.log(findUnique([1, 1, 2, 2, 3]));
// console.log(findUnique([1, 1, 2, 3, 4, 4]));
// console.log(findUnique([4, 4, 1, 1, 2, 3]));
// console.log(findUnique([4, 4, 1, 1, 2, 3, 5, 6, 6, 93, 11, 2, 2]));

// version 2

// const findUnique = (array) => {
//   const uniqueArr = array.filter((el, index, array) => {
//     return array.indexOf(el) === index;
//   });
//   return uniqueArr;
// };

// ----------------------------------------

// Find elements that are only one time in the array, that are not duplicated. Return an array of numbers that are not duplicated.

// const removeDuplites = (array) => {
//   const uniqueArr = array.filter((el, index, array) => {
//     return array.indexOf(el) === array.lastIndexOf(el);
//   });
//   return uniqueArr;
// };

// console.log(removeDuplites([1, 1, 2, 2, 3])); // [3]
// console.log(removeDuplites([1, 1, 2, 3, 4, 4])); // [2,3]
// console.log(removeDuplites([4, 4, 1, 1, 2, 3])); // [2,3]
// console.log(removeDuplites([4, 4, 1, 1, 2, 3, 5, 6, 6, 93, 11, 2, 2])); // [3, 5, 93, 11]
// ----------------------------------------
