// codewars 6kyu
// ---------------------------------------------------------
// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// const arrayDiff = (a, b) => {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         let index = a.indexOf(a[i]);
//         a.splice(index, 1);
//         i--;
//       }
//     }
//   }
//   return a;
// };

// console.log(arrayDiff([1, 2, 2, 2, 3], [2])); //  [1, 3]

// ---------------------------------------------------------
// Find the odd int
// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// const findOdd = (nums) => {
//   let numsObject = {};
//   let result;
//   nums.forEach((num) => {
//     if (!numsObject[num]) {
//       numsObject[num] = 1;
//     } else {
//       numsObject[num]++;
//     }
//   });
//   // console.log(numsObject); // {1: 2, 2: 4, 3: 6, 4: 1}
//   Object.entries(numsObject).forEach((arr) => {
//     if (arr[1] % 2 !== 0) {
//       result = arr[0];
//     }
//   });
//   return Number(result);
// };
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// ---------------------------------------------------------

// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// const multiple3or5 = (number) => {
//   let multiples = [];
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       multiples.push(i);
//     }
//   }
//   if (multiples.length === 0) {
//     return 0;
//   } else {
//     return multiples.reduce((acc, curr) => acc + curr);
//   }
// };

// console.log(multiple3or5(10)); // 23
// console.log(multiple3or5(2)); // 0
