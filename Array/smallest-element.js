```javascript
// Find the Smallest Element
// Find the smallest number in an array.

// Example:
// Input: [5, 10, 2, 8, 1]
// Output: 1

function findSmallest(arr) {
    // Assume the first number is the smallest
    let smallest = arr[0];

    // Check the remaining numbers
    for (let i = 1; i < arr.length; i++) {

        // If the current number is smaller,
        // update smallest
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

// Example
console.log(findSmallest([5, 10, 2, 8, 1])); // 1

// Time Complexity: O(n)
// Space Complexity: O(1)
```
