// Two Sum Problem
// Given an array of integers nums and a target,
// return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
