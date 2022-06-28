// -------------------------- codewars 6kyu -------------------------------
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

// const likes = (names) => {
//   switch (true) {
//     case names.length === 0:
//       return "no one likes this";
//     case names.length === 1:
//       return `${names[0]} likes this`;
//     case names.length === 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case names.length === 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     case names.length >= 4:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//     default:
//       "";
//   }
// };

// console.log(likes([])); // no one likes this
// console.log(likes(["Peter"])); // Peter likes this
// console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
// console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this

// -------------------------- codewars 5kyu -------------------------------

// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// const pigIt = (string) => {
//   let words = string.split(" ");
//   let wordsRev = words.map((word) => {
//     if (
//       word === "!" ||
//       word === "?" ||
//       word === ";" ||
//       word === "." ||
//       word === ","
//     ) {
//       return word;
//     } else {
//       return word.substr(1) + word.substr(0, 1) + "ay";
//     }
//   });
//   return wordsRev.join(" ");
// };

// console.log(pigIt("Pig latin is cool"));
// console.log(pigIt("Hello world !"));

// ---------------------------------------------------------
// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// const moveZeros = (arr) => {
//   arr.forEach((el) => {
//     if (el === 0) {
//       arr.push(el);
//       let index = arr.indexOf(el);
//       arr.splice(index, 1);
//     }
//   });
//   return arr;
// };

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// ---------------------------------------------------------
// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// const validParentheses = (parens) => {
//   while (parens.includes("()")) {
//     parens = parens.replace("()", "");
//   }
//   return parens.length === 0;
// };

// console.log(validParentheses("(())((()())())")); // true
// console.log(validParentheses(")(()))")); // false

// ---------------------------------------------------------
// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');

// v1
// const humanReadable = (seconds) => {
//   let sec = seconds % 60;
//   seconds = seconds - sec;
//   let min = (seconds / 60) % 60;
//   seconds = seconds - min * 60;
//   let h = seconds / 60 / 60;

//   let SS = sec < 10 ? `0${sec}` : `${sec}`;
//   let MM = min < 10 ? `0${min}` : `${min}`;
//   let HH = h < 10 ? `0${h}` : `${h}`;

//   return `${HH}:${MM}:${SS}`;
// };

// v2
// const humanReadable = (seconds) => {
//   let h = parseInt(seconds / 3600);
//   let min = parseInt(seconds / 60) % 60;
//   let sec = parseInt(seconds % 60);
//   const pad = (value) => {
//     return value < 10 ? "0" + value : value;
//   };
//   return `${pad(h)}:${pad(min)}:${pad(sec)}`;
// };

// console.log(humanReadable(45296)); // 12:34:56
// console.log(humanReadable(86399)); // 23:59:59

// ---------------------------------------------------------

// Where my anagrams at?
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// For Go: Empty string slice is expected when there are no anagrams found.

// v1

// const anagrams = (word, words) => {
//   let anagramWords = [];

//   const sortString = (string) => string.split("").sort().join("");

//   words.forEach((el) => {
//     let sortedEl = sortString(el);
//     if (sortString(word).includes(sortedEl)) {
//       anagramWords.push(el);
//     }
//   });

//   return anagramWords;
// };

// // v2

// const anagrams = (word, words) => {
//   const sortString = (string) => string.split("").sort().join("");
//   return words.filter((el) => sortString(word) === sortString(el));
// };

// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

// ---------------------------------------------------------

// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// const rgb = (r, g, b) => {
//   const checkRGBValue = (value) => {
//     if (value < 0) {
//       value = 0;
//     }
//     if (value > 255) {
//       value = 255;
//     }
//     return value;
//   };
//   const numberToHex = (number) => {
//     let hex = number.toString(16).toUpperCase();
//     return hex.length === 1 ? `0${hex}` : hex;
//   };

//   let red = numberToHex(checkRGBValue(r));
//   let green = numberToHex(checkRGBValue(g));
//   let blue = numberToHex(checkRGBValue(b));

//   return `${red}${green}${blue}`;
// };

// console.log(rgb(148, 0, 211)); // 9400D3
// console.log(rgb(183, 0, 123)); // B7007B

// ---------------------------------------------------------
// Pete, the baker

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// const cakes = (recipe, available) => {
//   const recipeIngr = Object.entries(recipe);
//   console.log(recipeIngr);
//   const availableIngr = Object.entries(available);
//   console.log(availableIngr);

//   let recipePerCake = {};

//   for (let i = 0; i < recipeIngr.length; i++) {
//     recipePerCake[recipeIngr[i][0]] = 0; // {apples: 0, flour: 0, sugar: 0, milk: 0, oil: 0}
//     for (let j = 0; j < availableIngr.length; j++) {
//       if (recipeIngr[i][0] === availableIngr[j][0]) {
//         recipePerCake[recipeIngr[i][0]] =
//           availableIngr[j][1] / recipeIngr[i][1]; // {apples: 0, flour: 6.6, sugar: 3.3, milk: 20, oil: 0}
//       }
//     }
//   }

//   console.log(recipePerCake);
//   let numbers = Object.values(recipePerCake).sort((a, b) => a - b); // [0, 0, 3.3, 6.6, 20]
//   console.log(numbers);
//   return Math.floor(numbers[0]);
// };

// // console.log(
// //   cakes(
// //     { flour: 500, sugar: 200, eggs: 1 },
// //     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
// //   )
// // );
// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );

// ---------------------------------------------------------

// The Hashtag Generator
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// const generateHashtag = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   let filteredStrArr = str
//     .split(" ")
//     .map((el) => el.substr(0, 1).toUpperCase() + el.substr(1));
//   console.log(filteredStrArr);

//   let hashtag = `#${filteredStrArr.join("")}`;

//   return hashtag.length > 140 ? false : hashtag;
// };

// console.log(generateHashtag(" Hello there thanks for trying my Kata")); // #HelloThereThanksForTryingMyKata
// console.log(generateHashtag("        ")); // false

// ---------------------------------------------------------

// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// v 1
// const domainName = (url) => {
//   let modifiedUrl = url;
//   let domain = "";

//   if (url.includes("http://")) {
//     modifiedUrl = url.substr(7);
//   }
//   if (url.includes("https://")) {
//     modifiedUrl = url.substr(8);
//   }
//   if (modifiedUrl.includes("www.")) {
//     modifiedUrl = modifiedUrl.substr(4);
//   }

//   for (let i = 0; i < modifiedUrl.length; i++) {
//     if (modifiedUrl[i] === ".") {
//       let index = modifiedUrl.indexOf(modifiedUrl[i]);
//       domain = modifiedUrl.substring(0, index);
//     }
//   }
//   return domain;
// };

// v 2
// const domainName = (url) => {
//   url = url.replace("http://", "");
//   url = url.replace("https://", "");
//   url = url.replace("www.", "");
//   let domain = url.split(".")[0];
//   return domain;
// };

// console.log(domainName("https://github.com/martasolo")); // github
// console.log(domainName("http://www.zombie-bites.com")); // zombie-bites
// console.log(domainName("www.xakep.ru")); // xakep

// -------------------------- codewars 4kyu -------------------------------
