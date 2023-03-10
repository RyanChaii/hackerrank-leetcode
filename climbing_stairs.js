/*
Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45

 @param {number} n
 @return {number}\

 fibonacci sequence

 url: https://leetcode.com/problems/climbing-stairs/description/
*/

var n = 5;

var climbStairs = function (n) {
  var n1 = 0;
  var n2 = 1;
  var newN = 0;

  for (var i = 1; i <= n; i++) {
    newN = n1 + n2;
    n1 = n2;
    n2 = newN;
  }
  return n2;
};

console.log(climbStairs(n));
