// leetcode - easy:

// -------------------------------------------------------
// Roman to integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// const roman = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const romanToInteger = (string) => {
//   let result = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "I" && string[i + 1] === "V") {
//       result += 4;
//       i++;
//     } else if (string[i] === "I" && string[i + 1] === "X") {
//       result += 9;
//       i++;
//     } else if (string[i] === "X" && string[i + 1] === "L") {
//       result += 40;
//       i++;
//     } else if (string[i] === "X" && string[i + 1] === "C") {
//       result += 90;
//       i++;
//     } else if (string[i] === "C" && string[i + 1] === "D") {
//       result += 400;
//       i++;
//     } else if (string[i] === "C" && string[i + 1] === "M") {
//       result += 900;
//       i++;
//     } else {
//       result += roman[string[i]];
//     }
//   }
//   return result;
// };

// console.log(romanToInteger("LV")); // 55
// console.log(romanToInteger("LVIII")); //58
// console.log(romanToInteger("MII")); //1002
// console.log(romanToInteger("MCMXCIV")); // 1994
// console.log(romanToInteger("MCMLXXXIX")); // 1989

// -------------------------------------------------------

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// const longestCommonPrefix = function (strArr) {
//   strArr.sort((a, b) => a.length - b.length);

//   for (let i = 0; i < strArr[0].length; i++) {
//     for (let j = 0; j < strArr.length; j++) {
//       if (strArr[j][i] !== strArr[0][i]) {
//         return strArr[0].slice(0, i);
//       }
//     }
//   }
//   return strArr[0];
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
// console.log(longestCommonPrefix(["flower", "flow", "flowing"])); //flow
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""

// -------------------------------------------------------

//   Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// v1 - mutating the original array
// const rotateArray1 = (array, k) => {
//   for (let i = 1; i <= k; i++) {
//     let el = array.pop();
//     array.unshift(el);
//   }
//   return array;
// };

// console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
// leetcode - 1 error when testing

// v2 - not mutating the original array

// const rotateArray2 = (array, k) => {
//   const rotatedPart = array.slice(array.length - k, array.length);
//   const stillPart = array.slice(0, array.length - k);
//   return [...rotatedPart, ...stillPart];
// };

// console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
// leetcode - not accepting a new array, just modifying the input array

// -------------------------------------------------------

// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([2, 7, 11, 15], 18)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
console.log(twoSum([3, 2, 3], 6)); // [0, 2]
console.log(twoSum([2, 7, 11, 15], 17)); // [0,3]
console.log(twoSum([3, 2, 4, 5, 7, 8], 12)); // [2, 5]
