// Two Sum using Hash Map
// Find two numbers whose sum equals the target.
// Return their indices.

function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i];

        // Check if the number we need already exists
        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        // Store the current number and its index
        map.set(nums[i], i);
    }

    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

// Another example
console.log(twoSum([3, 2, 4], 6));
// [1, 2]

// Time Complexity: O(n)
// Space Complexity: O(n)
