```javascript
// Find the Largest Element
// Find the largest number in an array.

// Example:
// Input: [3, 7, 2, 9, 1]
// Output: 9

function findLargest(arr) {
    // Assume the first number is the largest
    let largest = arr[0];

    // Check the remaining numbers
    for (let i = 1; i < arr.length; i++) {

        // If the current number is bigger,
        // update largest
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Example
console.log(findLargest([3, 7, 2, 9, 1])); // 9

// Time Complexity: O(n)
// Space Complexity: O(1)
```
