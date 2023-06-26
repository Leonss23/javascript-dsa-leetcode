const { benchmark, generateInverseArray } = require("./utils");

/// O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

/// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

/// O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // console.log({ i });

    for (let j = i; j > 0; j--) {
      // console.log({ j });
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}

function mergeSort(arr) {}

// Test Data

let arr = generateInverseArray(4);
console.log(arr);

// Tests/Benchmarks
let resultBubbleSort = benchmark(bubbleSort, [Array.from(arr)]);
let resultSelectionSort = benchmark(selectionSort, [Array.from(arr)]);
let resultInsertionSort = benchmark(insertionSort, [Array.from(arr)]);

console.log({ resultBubbleSort, resultSelectionSort, resultInsertionSort });
