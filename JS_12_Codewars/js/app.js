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

// ---------------------------------------------------------

// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// const spinWords = (string) => {
//   let words = string.split(" "); // ['Hey', 'fellow', 'warriors']
//   console.log(words);
//   let wordsReversed = words.map((word) => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   });
//   console.log(wordsReversed);  // ['Hey', 'wollef', 'sroirraw']
//   return wordsReversed.join(" ");
// };

// console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
// console.log(spinWords("This is another test")); // This is rehtona test

// ---------------------------------------------------------

// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// v 1
// const digital_root = (number) => {
//   if (number < 10) {
//     return number;
//   }
//   let arrNumber = number.toString().split(""); // ['4', '9', '3', '1', '9', '3']
//   let sum = arrNumber.reduce((acc, curr) => Number(acc) + Number(curr));

//   while (sum >= 10) {
//     sum = sum
//       .toString()
//       .split("")
//       .reduce((acc, curr) => Number(acc) + Number(curr));
//     if (sum > 10) {
//       continue;
//     }
//   }
//   return sum;
// };

// // v2
// const digital_root = (number) => {
//   if (number < 10) {
//     return number;
//   }
//   let arrNumber = number.toString().split("");
//   let sum = arrNumber.reduce((acc, curr) => Number(acc) + Number(curr));

//   return digital_root(sum);
// };

// console.log(digital_root(493193)); //2
// console.log(digital_root(732189)); //3
// console.log(digital_root(7)); //7

// ---------------------------------------------------------
// Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

const likes = (names) => {
  switch (true) {
    case names.length === 0:
      return "no one likes this";
    case names.length === 1:
      return `${names[0]} likes this`;
    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`;
    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case names.length >= 4:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    default:
      "";
  }
};

console.log(likes([])); // no one likes this
console.log(likes(["Peter"])); // Peter likes this
console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this
