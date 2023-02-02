/* 
Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

@param {number[]} nums
@return {number[]}

url: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
*/

var nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function (nums) {
  var numArray = [];

  for (var i = 1; i < nums.length + 1; i++) {
    if (!nums.includes(i)) {
      numArray.push(i);
    }
  }

  return numArray;
};

console.log(findDisappearedNumbers(nums));
