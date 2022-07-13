// ------------ freeCodeCamp ------------------

// ------------ basic JavaScript --------------

// Recursion-----------------------------------

// Replace Loops using Recursion
// Recursion is the concept that a function can be expressed in terms of itself.

// To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//     console.log("product", product);
//   }
//   return product;
// }

// console.log(multiply([1, 2, 3, 4, 5], 3));

// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply([1, 2, 3, 4, 5], 3));

// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// -----------

// recursion with factorial (silnia)

// const factorial = (n) => {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(4));

// -----------

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// const sum = (arr, n) => {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return arr[0];
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// };

// console.log(sum([1, 2, 3, 4, 5], 3));
// console.log(sum([1, 2, 3, 4, 5], 4));
// console.log(sum([5, 3, 3, 4, 5], 1));

// -----------
// Write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number.

// const countUp = (n) => {
//   if (n === 0) {
//     return [];
//   } else {
//     const countArr = countUp(n - 1);
//     console.log("countArr", countArr);
//     countArr.push(n);
//     return countArr;
//   }
// };

// console.log(countUp(5));

// -----------
// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArr = countdown(n - 1);
//     countArr.unshift(n);
//     return countArr;
//   }
// }

// console.log(countdown(5));

// -----------

// Use Recursion to Create a Range of Numbers

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(4, 4));

// ----------------------------------------------
