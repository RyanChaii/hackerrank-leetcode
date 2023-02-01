/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

@param {number[]} nums
@param {number} target
@return {number[]}

url: https://leetcode.com/problems/two-sum/description/
*/

var nums = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1];
var target = 11;

// var nums = [2, 7, 11, 15];
// var target = 9;

var twoSum = function (nums, target) {
  var numsMap = new Map();
  var twoSumArray = [];

  for (var i = 0; i < nums.length; i++) {
    var remainder = target - nums[i];
    if (numsMap.has(remainder)) {
      twoSumArray.push(numsMap.get(remainder));
      numsMap.set(nums[i], i);
      twoSumArray.push(numsMap.get(nums[i]));
      return twoSumArray;
    }
    numsMap.set(nums[i], i);
  }
};

console.log(twoSum(nums, target));
