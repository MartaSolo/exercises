// closures

// like Counter with global variable

// let likeCounter = 0;

// const handleLikeCounter = () => {
//   return (likeCounter += 1);
// };

// console.log(handleLikeCounter());
// console.log(handleLikeCounter());
// console.log(handleLikeCounter());

// ------------------------

// like Counter with local variable - working incorrectly

// const handleLikeCounter = () => {
//   let likeCounter = 0;
//   return (likeCounter += 1);
// };

// console.log(handleLikeCounter()); // 1
// console.log(handleLikeCounter()); // 1
// console.log(handleLikeCounter()); // 1

// like Counter with closure - working incorrectly

// const handleLikeCounter = () => {
//   let likeCounter = 0;
//   const addLike = () => (likeCounter += 1);
//   return addLike();
// };

// console.log(handleLikeCounter()); // 1
// console.log(handleLikeCounter()); // 1
// console.log(handleLikeCounter()); // 1

// like Counter with closure - working incorrectly

// const handleLikeCounter = () => {
//   let likeCounter = 0;
//   return function addLike() {
//     likeCounter += 1;
//     return likeCounter;
//   };
// };

// const like = handleLikeCounter();

// console.log(like()); // 1
// console.log(like()); // 2
// console.log(like()); // 3
// -----------------------------------

let greeting = document.querySelector("#greeting");

// Update the value
greeting.setAttribute("value", "Hello there!");

// If you haven't made any updates to the field, these both return "Hello there!"

// let val1 = greeting.value;
// // Hello there!
// let val2 = greeting.getAttribute("value");
// // Hello there!

// console.log(val1);
// console.log(val2);

// // If you HAVE updated the field, val1 returns whatever was typed in the field instead
greeting.value = "Hey you";

let val1 = greeting.value; // Hey you

let val2 = greeting.getAttribute("value"); // Hello there!

console.log(val1);
console.log(val2);
