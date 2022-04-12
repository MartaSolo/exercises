// Zaimplementuj sortowanie bąbelkowe na przykładowej tablicy

// ------------------------------

// version 1

const bubbleSort = (numbersArray) => {
  const array = [...numbersArray];
  for (let i = 0; i < array.length - 1; i++) {
    // console.log(i);
    for (let j = 0; j < array.length - 1 - i; j++) {
      // console.log(array);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

const numbers = [1, 3, 6, 234, 7564, 983, 156, 99, 64];

bubbleSort(numbers);
// console.log(bubbleSort(numbers));
// [1, 3, 6, 64, 99, 156, 234, 983, 7564];
// console.log(numbers);
// [1, 3, 6, 234, 7564, 983, 156, 99, 64];

// ------------------------------

// version 2

const bubbleSort2 = (numbersArray) => {
  const array = [...numbersArray];
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;
      }
    }
  }
  return array;
};

console.log(bubbleSort2(numbers));
