const { benchmark } = require("./utils");

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {}
}

// Test Data

let arr = [];

// Tests/Benchmarks
let resultBubbleSort = benchmark(bubbleSort, [arr]);

console.log({ resultBubbleSort });
