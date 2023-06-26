const { benchmark, generateInverseArray } = require("./utils");

/**
 * O(n^2)
 * @param {Uint32Array} arr
 * */
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

/**
 * O(n^2)
 * @param {Uint32Array} arr
 * */
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

/**
 * O(n^2)
 * @param {Uint32Array} arr
 * */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}

/**
 * O(n log(n))
 * @param {Uint32Array} arr
 * */
function mergeSortRecursion(arr) {
  const length = arr.length;
  if (length <= 1) return arr;

  const middle = Math.floor(length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  mergeSortRecursion(leftArr);
  mergeSortRecursion(rightArr);
  merge(leftArr, rightArr, arr);
  return arr;
}
/**
 *
 * @param {Uint32Array} leftArr
 * @param {Uint32Array} rightArr
 * @param {Uint32Array} arr
 */
function merge(leftArr, rightArr, arr) {
  let leftSize = Math.floor(arr.length / 2);
  let rightSize = arr.length - leftSize;
  let i = 0;
  let l = 0;
  let r = 0;

  while (l < leftSize && r < rightSize) {
    if (leftArr[l] < rightArr[r]) {
      arr[i] = leftArr[l];
      i++;
      l++;
    } else {
      arr[i] = rightArr[r];
      i++;
      r++;
    }
  }
  while (l < leftSize) {
    arr[i] = leftArr[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    arr[i] = rightArr[r];
    i++;
    l++;
  }
}

/**
 * Normal: O(n log(n))
 * Worst: O(n^2)
 * @param {Uint32Array} arr
 * @returns
 */
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end <= start) return arr;
  const pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
  return arr;
}
function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++;
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}

// Test Data

let arr = generateInverseArray(16);
console.log(arr);

// Tests/Benchmarks
let resultBubbleSort = benchmark(bubbleSort, [Array.from(arr)]);
let resultSelectionSort = benchmark(selectionSort, [Array.from(arr)]);
let resultInsertionSort = benchmark(insertionSort, [Array.from(arr)]);
let resultMergeSort = benchmark(mergeSortRecursion, [Array.from(arr)]);
let resultQuickSort = benchmark(quickSort, [Array.from(arr)]);

console.log({
  resultBubbleSort,
  resultSelectionSort,
  resultInsertionSort,
  resultMergeSort,
  resultQuickSort,
});
