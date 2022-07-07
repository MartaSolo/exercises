// function declarations - nested function - this not working
// const person = {
//   name: "John",
//   actions: ["eats", "sleeps", "walks"],
//   printAction: function () {
//     this.actions.forEach(function (action) {
//       console.log(`${this.name} ${action}`);
//     });
//   },
// };

// person.printAction();
// this.name not working
//  eats   // sleeps   //walks

// ---------------------------------------------
// function declarations - nested function - new variable that - working

// const person = {
//   name: "John",
//   actions: ["eats", "sleeps", "walks"],
//   printAction: function () {
//     const that = this;
//     this.actions.forEach(function (action) {
//       console.log(`${that.name} ${action}`);
//     });
//   },
// };

// person.printAction();
// // John eats   // John sleeps   // John walks

// ---------------------------------------------
// function declarations - nested function - bind(this) - working

// const person = {
//   name: "John",
//   actions: ["eats", "sleeps", "walks"],
//   printAction: function () {
//     this.actions.forEach(
//       function (action) {
//         console.log(`${this.name} ${action}`);
//       }.bind(this)
//     );
//   },
// };

// person.printAction();
// John eats   // John sleeps   // John walks

// ---------------------------------------------
// function declarations - nested function - arrow function - working
const person = {
  name: "John",
  actions: ["eats", "sleeps", "walks"],
  printAction() {
    this.actions.forEach((action) => {
      console.log(`${this.name} ${action}`);
    });
  },
};

person.printAction();
// John eats   // John sleeps   // John walks

// ---------------------------------------------
// destructuring

// array
const arr = [1, 2, 3, 4];

[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
console.log(arr); // [4, 2, 3, 1]
