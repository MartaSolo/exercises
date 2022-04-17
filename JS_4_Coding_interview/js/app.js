// https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/main/src/questions/coding-questions.md

// Question: What is the value of foo?
// var foo = 10 + "20";
// console.log(foo); // 1020

// ---------------------------------

// Question: What will be the output of the code below?
// console.log(0.1 + 0.2 == 0.3);
// console.log((0.1 * 10 + 0.2 * 10) / 10 == 0.3);

// ---------------------------------

// Question: How would you make this work?
// add(2, 5); // 7
// add(2)(5); // 7

// const add = (x, y) => {
//   return x + y;
// };
// console.log(add(2, 5));

// const add = (x) => {
//   return (y) => {
//     return x + y;
//   };
// };

// console.log(add(2)(5));

// ---------------------------------

// Question: What value is returned from the following statement?
// console.log("i'm a lasagna hog".split("").reverse().join(""));

// let text = "i'm a lasagna hog";
// console.log(text.split("")); // ['i', "'", 'm', ' ', 'a', ' ', 'l', 'a', 's', 'a', 'g', 'n', 'a', ' ', 'h', 'o', 'g']
// console.log(text.split("").reverse()); // ['g', 'o', 'h', ' ', 'a', 'n', 'g', 'a', 's', 'a', 'l', ' ', 'a', ' ', 'm', "'", 'i']
// console.log(text.split("").reverse().join("")); // goh angasal a m'i

// ---------------------------------

// Question: What is the value of window.foo?
// ( window.foo || ( window.foo = "bar" ) );
// console.log(window.foo || (window.foo = "bar"));

// console.log(window);
// console.log(window.foo);
// console.log((window.foo = "bar"));
// console.log(window.foo); // bar

// ---------------------------------

// Question: What is the outcome of the two alerts below?
// var foo = "Hello";
// (function () {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar); // Uncaught ReferenceError: bar is not defined

// ---------------------------------

// Question: What is the value of foo.length?
// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo.length);  // 2

// ---------------------------------

// Question: What is the value of foo.x?
// var foo = { n: 1 }; // {n: 1}
// var bar = foo; // {n: 1}
// foo.x = foo = { n: 2 }; // {n: 2}

// console.log(foo);  // {n: 2}
// console.log(foo.x); // undefined
// console.log((foo.x = foo)); // {n: 1, x: {…}}
// console.log((foo = { n: 2 })); //{n: 2}

// // foo.x = foo = { n: 2 };
// // (foo.x = (foo = { n: 2 }));
// console.log((foo.x = foo = { n: 2 }));
// console.log(foo.x);
// console.log(bar);

// ---------------------------------

// Question: What does the following code print?
// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 0);
// Promise.resolve().then(function () {
//   console.log("three");
// });
// console.log("four");

// one
// four
// three
// two

// ---------------------------------

// Question: What is the difference between these four promises?
// doSomething().then(function () {
//   return doSomethingElse();
// });

// doSomething().then(function () {
//   doSomethingElse();
// });

// doSomething().then(doSomethingElse());

// doSomething().then(doSomethingElse);

// ---------------------------------

// Question: What will the code below output to the console and why?
// (function () {
//   var a = (b = 3);
// })();
// console.log("a defined? " + (typeof a !== "undefined"));
// // a defined? false
// console.log("b defined? " + (typeof b !== "undefined"));
// // b defined? true

// (function () {
//   var a = (b = 3);
//   console.log("a: " + a); // 3
//   console.log("b: " + b); // 3
// })();
// console.log("a: " + a); // undefined
// console.log("b: " + b); // 3

// ---------------------------------

// // Question: Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

console.log(foo1());
console.log(foo2());
