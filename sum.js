const { benchmark } = require("./utils");

/// O(n)
function sumLinear(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

/// O(1)
function sumConstant(num) {
  return (num * (num + 1)) / 2;
}

// Test data
let num = 1_000_000_000_000_000_000_000_000_000_000;

// Tests/Benchmarks
let resultSumLinear = benchmark(sumLinear, [num]);
let resultSumConstant = benchmark(sumConstant, [num]);

console.log({ resultSumLinear, resultSumConstant });
