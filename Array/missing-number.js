```javascript
// Find the Missing Number
// Find the missing number from 0 to n.

// Example:
// Input: [3, 0, 1]
// Output: 2

function findMissingNumber(arr) {
    let n = arr.length;

    // Calculate the expected sum from 0 to n
    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    // Calculate the sum of numbers in the array
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    // The difference is the missing number
    return expectedSum - actualSum;
}

// Example
console.log(findMissingNumber([3, 0, 1])); // 2

// Time Complexity: O(n)
// Space Complexity: O(1)
```
