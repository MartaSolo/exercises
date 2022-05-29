// Explain what is Linear (Sequential) Search

// v1 - finds the first appearance of the searched item
const linearSearch = (array, toFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toFind) {
      return i;
    }
  }
  return -1;
};

const arr1 = ["a", "b", "c", "d", "e"];

// console.log(linearSearch(arr1, "c")); //2
// console.log(linearSearch(arr1, "h")); //-1

// v2 - finds all appearances of the searched item

const globalLinearSearch = (array, toFind) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toFind) {
      results.push(i);
    }
  }
  // if array is empty return -1
  if (results.length === 0) {
    return -1;
  }
  return results;
};

const arr2 = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"];

console.log(globalLinearSearch(arr2, "c")); // [2, 7]
console.log(globalLinearSearch(arr2, "h")); //-1

const arr3 = [];

// console.log(!arr3);
