/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

URL: https://leetcode.com/problems/contains-duplicate/description/
*/

// [3, 3]

var nums = [3, 3];

var containsDuplicate = function (nums) {
  var numsMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      return true;
    }
    numsMap.set(nums[i], i);
  }
  return false;
};

console.log(containsDuplicate(nums));
