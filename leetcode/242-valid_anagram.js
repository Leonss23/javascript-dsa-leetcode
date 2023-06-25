/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sSorted = s.split("").sort().join("");
  let tSorted = t.split("").sort().join("");

  if (sSorted == tSorted) {
    return true;
  }
  return false;
};
let test = isAnagram("anagram", "nagaram");
console.log(test);
