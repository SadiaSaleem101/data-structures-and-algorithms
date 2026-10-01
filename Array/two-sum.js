```javascript
// Two Sum
// Find two numbers in an array whose sum equals the target.

// Example:
// nums = [2, 7, 11, 15]
// target = 9
// Output: [0, 1]

function twoSum(nums, target) {
    // Check every pair of numbers
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            // Check if the two numbers add up to target
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    // Return an empty array if no pair is found
    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)
```
