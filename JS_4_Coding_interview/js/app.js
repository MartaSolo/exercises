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
// function foo1() {
//   return {
//     bar: "hello",
//   };
// }

// function foo2() {
//   return;
//   {
//     bar: "hello";
//   }
// }

// console.log(foo1());
// console.log(foo2());

// ---------------------------------

// What will the code below output to the console and why?

// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func: this.foo = " + this.foo); // outer func: this.foo = bar
//     console.log("outer func: self.foo = " + self.foo); // outer func: self.foo = bar

//     (function () {
//       console.log("inner func: this.foo = " + this.foo); // inner func: this.foo = undefined
//       console.log("inner func: self.foo = " + self.foo); // inner func: self.foo = bar
//     })();
//   },
// };
// myObject.func();

// ---------------------------------

// Consider the following code snippet:
// (a) What gets logged to the console when the user clicks on "Button 4" and why?
// (b) Provide one or more alternate implementations that will work as expected.

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   btn.addEventListener("click", function () {
//     console.log(i);
//   });
//   document.body.appendChild(btn);
// }

// option 1
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   btn.addEventListener(
//     "click",
//     (function (i) {
//       return function () {
//         console.log(i);
//       };
//     })(i)
//   );
//   document.body.appendChild(btn);
// }

// option 2
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement("button");
//   btn.appendChild(document.createTextNode("Button " + i));
//   btn.addEventListener("click", function (e) {
//     console.log(e.target.innerText.charAt(7));
//   });
//   document.body.appendChild(btn);
// }

// ---------------------------------

// What will the code below output to the console and why?
// var arr1 = "john".split("");
// // arr1: ['j', 'o', 'h', 'n']
// console.log("arr1", arr1);

// var arr2 = arr1.reverse();
// // arr2:  ['n', 'h', 'o', 'j']
// // arr1: ['n', 'h', 'o', 'j']
// console.log("arr2", arr2);
// console.log("arr1", arr1);

// var arr3 = "jones".split("");
// // arr3: ['j', 'o', 'n', 'e', 's']
// console.log("arr3", arr3);

// arr2.push(arr3);
// console.log("arr2", arr2);
// // arr2: [n,h,o,j, [j,o,n,e,s]]
// console.log("arr1", arr1);
// // arr1: [n,h,o,j, [j,o,n,e,s]]

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// // array 1: length=5 last=j,o,n,e,s
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// // array 2: length=5 last=j,o,n,e,s

// ---------------------------------
// What will the code below output to the console and why?

// console.log(1 + "2" + "2"); // 122
// console.log(1 + +"2" + "2"); // 32   ??
// console.log(1 + -"1" + "2"); //  02
// console.log(+"1" + "1" + "2"); // 112
// console.log("A" - "B" + "2"); // NaN2
// console.log("A" - "B" + 2); // NaN

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------

// ---------------------------------
