/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  console.log({ nums });
  let existantList = new Set();
  let hasDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    hasDuplicate = existantList.has(nums[i]);
    existantList.add(nums[i]);
  }
  return hasDuplicate;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
