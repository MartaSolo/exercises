// Explain what is Binary Search

// iterative approach (using loops)

const binarySearch = (sortedArray, key) => {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      min = middle + 1;
    } else {
      // continue searching to the left
      max = middle - 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 7)); // 6
