function benchmark(callback, args) {
  let start = performance.now();
  let returned = callback(...args);
  let end = performance.now();

  console.log({ perf: end - start });
  return returned;
}

function generateArray(bits) {
  let items = Math.floor(Math.pow(2, bits));
  let arr = new Uint32Array(items);
  for (let i = 0; i < items; i++) {
    arr[i] = i;
  }
  return arr;
}

function generateInverseArray(bits) {
  let items = Math.floor(2 ** bits);
  let arr = new Uint32Array(items--);
  for (let i = 0; 0 < items; i++) {
    arr[i] = items;
    items--;
  }
  return arr;
}

module.exports = { benchmark, generateArray, generateInverseArray };
