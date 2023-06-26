const { benchmark, generateArray } = require("./utils");

/// O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

/// O(log(n))
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  while (low <= high) {
    let probe = Math.floor(low + (high - low) / 2);

    if (arr[probe] === target) return probe;
    if (arr[probe] < target) low = probe + 1;
    if (arr[probe] > target) high = probe - 1;
  }
  return -1;
}

/// O(log(log(n)))
function interpolationSearch(arr, target, low = 0, high = arr.length - 1) {
  while (low <= high) {
    let probe = Math.floor(
      low + ((high - low) * (target - arr[low])) / (arr[high] - arr[low])
    );

    if (arr[probe] === target) return probe;
    if (arr[probe] < target) low = probe + 1;
    if (arr[probe] > target) high = probe - 1;
  }
  return -1;
}

// Test data
let arr = generateArray(24);

let target = Math.floor(arr.length * 0.76);

// Test/Benchmarks
// let foundLinearSearch = benchmark(linearSearch, [arr, target]);
let foundBinarySearch = benchmark(binarySearch, [arr, target]);
let foundInterpolationSearch = benchmark(interpolationSearch, [arr, target]);

console.log({
  // foundLinearSearch,
  foundBinarySearch,
  foundInterpolationSearch,
});
