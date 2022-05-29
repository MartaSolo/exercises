// insertion sort

const insertionSort = (array) => {
  const arr = [...array]; // new array so that we dont mutate the inital one
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
};

console.log(insertionSort([7, 2, 9, 4, 6, 1]));
// [1, 2, 4, 6, 7, 9]
