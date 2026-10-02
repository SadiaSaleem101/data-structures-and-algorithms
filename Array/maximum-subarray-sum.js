// Maximum Subarray Sum
// Find the largest possible sum of a continuous subarray.

// Example:
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function maxSubarraySum(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];

    // Check each number
    for (let i = 1; i < arr.length; i++) {

        // Decide whether to start a new subarray
        // or continue the current one
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        // Update the maximum sum
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

// Example
console.log(
    maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
); // 6

// Time Complexity: O(n)
// Space Complexity: O(1)
