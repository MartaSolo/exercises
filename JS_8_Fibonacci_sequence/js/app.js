// fibonacci sequence

// function that create fibonacci sequence having a length equal to passed number as an argument

// verion 1
const createFibonacciSeries = (number) => {
  let array = [0, 1];
  for (let i = 2; i < number; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array;
};

console.log(createFibonacciSeries(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] - length 10

//Task: Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// version 1
// const getFibonacci = (number) => {
//   let array = [0, 1];

//   for (let i = 2; i < number +1; i++) {
//     array.push(array[i - 2] + array[i - 1]);
//   }
//   // [0, 1, 1, 2, 3, 5]
//   return array[number];
// };

// console.log(getFibonacci(5));
// 5
// version 2
// const getFibonacci = (number) => {
//   let array = [0, 1];

//   for (let i = 2; i <= number; i++) {
//     array.push(array[i - 2] + array[i - 1]);
//   }
//   // [0, 1, 1, 2, 3, 5]
//   return array[number];
// };

// console.log(getFibonacci(5));
// 5

// version 3 - recursion

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(10)); //55
