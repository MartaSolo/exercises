// -------------------------------------------------
// Write a function (less then 80 characters) that returns a boolean indicating wheather or not strinjg is a palindrome.

// const isPalidrome = (string) => {
//   let reversedStr = string.split("").reverse().join("");
//   console.log(reversedStr);
//   return reversedStr === string ? true : false;
// };

// console.log(isPalidrome("kajak"));
// console.log(isPalidrome("cat"));

// -------------------------------------------------

// Givena an array of colors build an array of cars with those colors.

// const colors = ["blue", "red", "green"];

// function Car(color) {
//   this.type = "car";
//   this.color = color;
// }

// createCars = (array) => {
//   return array.map((el) => new Car(el));
// };

// console.log(createCars(colors));

// -------------------------------------------------

// Closure - what is that, example.

// example 1
// const handleLikes = () => {
//   let likeCounter = 0;
//   const addLike = () => {
//     likeCounter++;
//     return likeCounter;
//   };
//   return addLike;
// };

// const likes = handleLikes();
// console.log(likes());
// console.log(likes());
// console.log(likes());
// console.log(likes());
// console.log(likes());
// console.log(likes());

// example 2
// const a = 1;

// const outherFn = () => {
//   const b = 2;
//   const innerFn = () => {
//     const c = 3;
//     return a + b + c;
//   };
//   return innerFn();
// };

// console.log(outherFn()); // 6

// -------------------------------------------------

// How to empty an Array.apply

// const arr = [1, 2, 3, 4];

// 1 way
// arr.length = 0;
// console.log(arr);  // []

// 2 way
// arr.splice(0, arr.length);
// console.log(arr);  // []

// 3 way
// while (arr.length > 0) {
//   arr.pop();
// }
// console.log(arr); // []
// -------------------------------------------------
// Get unique characters from a string and return it as a string:

// v 1
// const getUnique = (string) => {
//   const arr = [...string];
//   const uniqueArr = arr.filter(
//     (el, index, arr) => arr.indexOf(el) === arr.lastIndexOf(el) // there have to be el, index, arr arguments!
//   );
//   return uniqueArr.join(""); // ces
// };

// v 2
// const getUnique = (string) => {
//   let strObj = {};
//   string
//     .split("")
//     .forEach((char) => (!strObj[char] ? (strObj[char] = 1) : strObj[char]++));
//   let uniqueArr = Object.entries(strObj).filter((obj) => obj[1] === 1);
//   return uniqueArr.map((el) => el[0]).join("");
// };

// console.log(getUnique("aaabbcddes")); // ces

// -------------------------------------------------

// Count duplicate values in Array.

// const countFreq = (arr) => {
//   let obj = {};
//   arr.forEach((el) => (obj[el] = obj[el] + 1 || 1));
//   return obj;
// };

// console.log(countFreq([1, 2, 2, 2, 3, 3, 4, 5, 5, 6]));
// console.log(countFreq(["a", "a", "b", "c", "c", "d"]));

// -------------------------------------------------
// Count duplicate in string js and return a string with element and it frequency.

// const countFreq = (string) => {
//   let obj = {};
//   string.split("").forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
//   const arr = Object.entries(obj).map((el) => `${el[0]}:${el[1]}`);
//   console.log(arr);
//   return arr.join(",");
// };

// console.log(countFreq("aaabbccdeffft"));

// -------------------------------------------------
// Sum of Array plus one - function that to array of integers adds 1 to every Element, and the function returns the sum of elements.

// const sumPlusInt = (array, number) => {
//   const arrPlusNum = array.map((el) => el + number);
//   let sum = arrPlusNum.reduce((acc, curr) => acc + curr);
//   return sum;
// };

// console.log(sumPlusInt([1, 2, 3, 4, 5, 6, 7], 2));

// -------------------------------------------------

// String rotation
// Find out if a string is a rotation of another string eg string ABCD is a rotaion of BCDA but not ACBD.

// const stringRotation = (str1, str2) => {
//   let str1Rotated = str1.substr(1) + str1.substr(0, 1);
//   return str1Rotated === str2 ? true : false;
// };

// console.log(stringRotation("ABCD", "BCDA"));
// console.log(stringRotation("ABCD", "ACBD"));

// -------------------------------------------------

// sum of odd numbers in an Array.

// const sumOdd = (array) => {
//   const oddArr = array.filter((el) => el % 2 !== 0);
//   const sum = oddArr.reduce((acc, curr) => acc + curr);
//   return sum;
// };

// console.log(sumOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// -------------------------------------------------
// Simple clock angle. You will be given a number that represents minutes, return the angle the hand creates with 12 o'clock.

// const clockAngle = (number) => {
//   return (360 / 60) * number;
// };

// console.log(clockAngle(15));
// console.log(clockAngle(30));
// console.log(clockAngle(45));

// -------------------------------------------------

// Test of dividors
// you will be given two numbers and divisor. Check if numbers between these numbers can be divideb by dividor. Consloe.log all the numbers and if it is a divisor print after if div + Divisor.

// const testDivisor = (min, max, divisor) => {
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   arr.forEach((el) => {
//     if (el % 3 === 0) {
//       console.log(`${el} divisor ${divisor}`);
//     } else {
//       console.log(`${el}`);
//     }
//   });
// };

// console.log(testDivisor(2, 12, 3));

// -------------------------------------------------

// Sum of nested array
// You will be given an array of netsed array with integers. Return sum of these SVGAnimatedNumberList, with reduce and without reduce.

// const sumNestedArr = (array2D) => {
//   return array2D.flat().reduce((acc, curr) => acc + curr);
// };
// const sumNestedArr = (array2D) => {
//   const arr = array2D.flat();
//   console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(sumNestedArr([[1, 2, 3], [4], [3, 4, 5], [9]]));

// -------------------------------------------------

// Lucky SubmitEventfunction takes an array and returns true if there are any three consecutive numbers sum to 7.

// const luckySeven = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     return array[i] + array[i + 1] + array[i + 2] === 7 ? true : false;
//   }
// };

// const luckySeven = (arr) => {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] + arr[i + 2] === 7) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// };

// console.log(luckySeven([1, 2, 4, 4, 0, 5]));
// console.log(luckySeven([1, 2, 3, 5, 6, 1, 2, 4]));
// console.log(luckySeven([1, 2, 3, 5, 6, 1, 2]));

// -------------------------------------------------

// Given a string reverse each word in the sentence.

// const reverseString = (string) => {
//   return string.split("").reverse().join("");
// };

// console.log(reverseString("Welcome to the jungle")); //  elgnuj eht ot emocleW

// -------------------------------------------------

// Give an example of a callback function

// const filterArray = (array, callback) => {
//   let result = [];
//   array.forEach((el) => {
//     if (callback(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// const isEven = (number) => number % 2 === 0;

// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8], isEven));

// -------------------------------------------------

// Find missing in an array of consecutive numbers and return it

// const findMissing = (array) => {
//   const min = Math.min(...array);
//   const max = Math.max(...array);
//   let missing = "";
//   for (let i = min; i <= max; i++) {
//     if (!array.includes(i)) {
//       missing = i;
//     }
//   }
//   return missing;
// };

// console.log(findMissing([1, 2, 3, 5, 6, 7, 8, 9]));
// console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9]));

// -------------------------------------------------

// Remove duplictaes in array and return unique array

// const removeDuplicates = (array) => {
//   const obj = {};
//   array.forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
//   const arrUnique = Object.entries(obj).map((el) => el[0]);
//   return arrUnique;
// };

// console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9])); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
// -------------------------------------------------
// Two sum
// Given an array of integers and a target number , return indices of the two numbers that add up to target.

// const twoSum = (array, target) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result.slice(0, 2);
// };

// console.log(twoSum([3, 2, 4, 5, 7, 8], 5)); // [0, 1];
// console.log(twoSum([5, 2, 4, 1, 7, 9], 12)); // [0,4]
// console.log(twoSum([5, 3, 4, 1, 7, 9], 11)); // [2,4]

// -------------------------------------------------
// Determin overlaping numbers in ranges

// const overlappingRanges = (array) => {
//   const firstRange = [];
//   const secondRange = [];
//   const overlapping = [];

//   for (let i = array[0]; i <= array[1]; i++) {
//     firstRange.push(i);
//   }
//   for (let i = array[2]; i <= array[3]; i++) {
//     secondRange.push(i);
//   }

//   //   firstRange.forEach((el, i, array) => {
//   firstRange.forEach((el) => {
//     if (secondRange.includes(el)) {
//       overlapping.push(el);
//     }
//   });
//   console.log(firstRange);
//   console.log(secondRange);
//   console.log(overlapping);

//   return overlapping.length >= array[4] ? true : false;
// };

// console.log(overlappingRanges([10, 20, 4, 14, 4]));
// console.log(overlappingRanges([10, 20, 4, 12, 4]));

// -------------------------------------------------

// Call stack

// const addOne = (value) => value + 1;
// const addTwo = (value) => addOne(value + 1);
// const addThree = (value) => addTwo(value + 1);

// const calculation = () => {
//   return addThree(1) + addTwo(2);
// };

// console.log(calculation());

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
