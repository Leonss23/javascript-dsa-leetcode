/**
 *
 * @param {Function} callback
 * @param {Array} args
 * @returns
 */
function benchmark(callback, args) {
  console.log(callback.name);
  const start = performance.now();
  const returned = callback(...args);
  const end = performance.now();

  const diff = end - start;

  console.log(diff, "ms");
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
