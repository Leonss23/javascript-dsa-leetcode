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

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[i] < minIdx) {
        minIdx = i;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// Test Data

let arr = generateInverseArray(16);
console.log(arr);

// Tests/Benchmarks
let resultBubbleSort = benchmark(bubbleSort, [arr]);
let resultSelectionSort = benchmark(selectionSort, [arr]);

console.log({ resultBubbleSort, resultSelectionSort });
