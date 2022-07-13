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

// Implement the filter Method on a Prototype

// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//   // Only change code below this line
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       newArray.push(this[i]);
//     }
//   }
//   // Only change code above this line
//   return newArray;
// };

// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1;
// });
// console.log(new_s);

// -----------------------------------------------

// Return Part of an Array Using the slice Method
// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

// function sliceArray(anim, beginSlice, endSlice) {
//   return anim.slice(beginSlice, endSlice);
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// console.log(sliceArray(inputAnim, 1, 3));

// -----------------------------------------------

// Remove Elements from an Array Using slice Instead of splice

// Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3 (3 first elements), and return a new array with only the first three items.

// Do not mutate the original array provided to the function.

// function nonMutatingSplice(cities) {
//   const arr = cities.slice(0, 3);
//   return arr;
// }

// const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// console.log(nonMutatingSplice(inputCities));

// -----------------------------------------------

// Combine Two Arrays Using the concat Method

// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

// function nonMutatingConcat(original, attach) {
//   return original.concat(attach);
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// console.log(nonMutatingConcat(first, second)); // [1, 2, 3, 4, 5]

// -----------------------------------------------
// Add Elements to the End of an Array Using concat Instead of push

// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

// function nonMutatingPush(original, newItem) {
//   return original.concat(newItem);
// }

// const first = [1, 2, 3];
// const second = [4, 5];

// console.log(nonMutatingPush(first, second));

// -----------------------------------------------

// Use the reduce Method to Analyze Data

// The global variable
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

// The variable watchList holds an array of objects with information on several movies.
// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
// Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

// function getRating(watchList) {
//   let averageRating;
//   const arr = watchList.filter(
//     (listItem) => listItem.Director === "Christopher Nolan"
//   );
//   console.log(arr);
//   let sum = arr.reduce((acc, curr) => {
//     return acc + Number(curr.imdbRating);
//   }, 0);
//   averageRating = sum / arr.length;
//   return averageRating;
// }

// console.log(getRating(watchList));

// -----------------------------------------------

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

// const squareList = (arr) => {
//   const filteredArr = arr.filter((el) => {
//     return el > 0 && Number.isInteger(el);
//   });
//   const result = filteredArr.map((el) => Math.pow(el, 2));
//   return result;
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// -----------------------------------------------
// Sort an Array Alphabetically using the sort Method

// function alphabeticalOrder(arr) {
//   return arr.sort((a, b) => a.localeCompare(b));
// }

// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// -----------------------------------------------
// Return a Sorted Array Without Changing the Original Array

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   return [...arr].sort((a, b) => a - b);
// }

// console.log(nonMutatingSort(globalArray));

// -----------------------------------------------

// Split a String into an Array Using the split Method

// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

// function splitify(str) {
//   return str.split(/\W/);
// }

// console.log(splitify("Hello World,I-am code"));

// -----------------------------------------------

// Combine an Array into a String Using the join Method

// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

// function sentensify(str) {
//   return str.split(/\W/).join(" ");
// }
// console.log(sentensify("May-the-force-be-with-you"));

// -----------------------------------------------
// Apply Functional Programming to Convert Strings to URL Slugs

// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces

// function urlSlug(title) {
//   const arr = title.toLowerCase().trim().split(" ");
//   const filteredArr = arr.filter((el) => el !== "");
//   return filteredArr.join("-");
// }
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
// console.log(urlSlug(" Winter Is  Coming"));

// -----------------------------------------------
// Use the every Method to Check that Every Element in an Array Meets a Criteria

// Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

// function checkPositive(arr) {
//   return arr.every((el) => el > 0);
// }
// console.log(checkPositive([1, 2, 3, -4, 5]));

// -----------------------------------------------

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
// Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

// function checkPositive(arr) {
//   return arr.some((el) => el > 0);
// }

// console.log(checkPositive([1, 2, 3, -4, 5]));

// -----------------------------------------------
// Introduction to Currying and Partial Application

// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

// function add(x) {
//   return (y) => {
//     return (z) => {
//       return x + y + z;
//     };
//   };
// }

// console.log(add(10)(20)(30));

// -----------------------------------------------

// ----- Intermediate algorithm scripting -------------

// Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// function sumAll(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   const numbers = [];
//   for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
//     numbers.push(i);
//   }
//   return numbers.reduce((acc, curr) => acc + curr);
// }

// console.log(sumAll([1, 4]));

// -----------------------------------------------

// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// version 1

// function diffArray(arr1, arr2) {
//   const newArr = [...arr1, ...arr2];
//   let result = [];
//   newArr.forEach((el, i, arr) => {
//     if (arr.indexOf(el) === arr.lastIndexOf(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// }

// version 2
// function diffArray(arr1, arr2) {
//   const newArr = [...arr1, ...arr2];
//   const obj = {};
//   newArr.forEach((el) => (!obj[el] ? (obj[el] = 1) : obj[el]++));
//   const diff = Object.entries(obj).filter((el) => el[1] === 1);
//   const result = diff.map((el) => Number(el[0]));
//   return result;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// -----------------------------------------------

// Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// function destroyer(arr, ...args) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         let index = arr.indexOf(arr[i]);
//         arr.splice(index, 1);
//         i--;
//       }
//     }
//   }
//   return arr;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]

// -----------------------------------------------

// Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is
// [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" },
// then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  // filter the collection
  let arr = collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
); // [{first: 'Tybalt', last: 'Capulet'}]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
); // [{ "apple": 1, "bat": 2, "cookie": 2 }].);
