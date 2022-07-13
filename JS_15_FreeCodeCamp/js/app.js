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

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum === endNum) {
//     return [startNum];
//   } else {
//     const arr = rangeOfNumbers(startNum + 1, endNum);
//     arr.unshift(startNum);
//     return arr;
//   }
// }

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(4, 4));

// ----------------------------------------------

// Profile Lookup -----------------------

// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   const filteredContacts = contacts.filter(
//     (contact) => contact.firstName === name
//   );
//   if (filteredContacts.length === 0) {
//     return "No such contact";
//   } else if (filteredContacts.length === 1 && !filteredContacts[0][prop]) {
//     return "No such property";
//   } else {
//     return filteredContacts[0][prop];
//   }
// }
// console.log(lookUpProfile("Akira", "likes")); // ['Pizza', 'Coding', 'Brownie Points']
// console.log(lookUpProfile("Akira", "address")); // No such property
// console.log(lookUpProfile("Kristian", "lastName")); // Vos

// -----------------------------------------------
// ------ Functional programming -----------------

// -----------------------------------------------

// Refactor Global Variables Out of Functions

// const bookList = [
//   "The Hound of the Baskervilles",
//   "On The Electrodynamics of Moving Bodies",
//   "Philosophiæ Naturalis Principia Mathematica",
//   "Disquisitiones Arithmeticae",
// ];

// console.log("bookList", bookList);

// function add(bookArr, bookName) {
//   const newBookArr = [...bookArr];
//   newBookArr.push(bookName);
//   return newBookArr;
// }

// function remove(bookArr, bookName) {
//   const newBookArr = [...bookArr];
//   const book_index = newBookArr.indexOf(bookName);
//   if (book_index >= 0) {
//     newBookArr.splice(book_index, 1);
//     return newBookArr;
//   }
// }

// console.log(add(bookList, "A Brief History of Time"));
// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));

// -----------------------------------------------

// Use the map Method to Extract Data from an Array

// // The global variable
// const watchList = [
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//   },
// ];

// // const ratings = watchList.map((listItem) => {
// //   return { Title: listItem.Title, imdbRating: listItem.imdbRating };
// // });
// const ratings = watchList.map((listItem) => {
//   return { title: listItem.Title, rating: listItem.imdbRating };
// });

// console.log(JSON.stringify(ratings));

// -----------------------------------------------

// Implement map on a Prototype

// const s = [23, 65, 98, 5];

// Array.prototype.myMap = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     let value = callback(this[i]);
//     newArray.push(value);
//   }
//   return newArray;
// };

// const new_s = s.myMap(function (item) {
//   console.log(item);
//   return item * 2;
// });
// console.log(new_s); // [46, 130, 196, 10].

// -----------------------------------------------

// Use the filter Method to Extract Data from an Array

// The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// const filteredList = watchList
//   .map((listItem) => {
//     return { title: listItem.Title, rating: listItem.imdbRating };
//   })
//   .filter((listItem) => Number(listItem.rating) >= 8.0);

// // Only change code above this line

// console.log(filteredList);

// -----------------------------------------------
