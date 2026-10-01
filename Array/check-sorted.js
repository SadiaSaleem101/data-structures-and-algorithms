```javascript
// Check if an Array is Sorted
// Check whether the elements are in ascending order.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: true

function isSorted(arr) {

    // Compare each number with the next number
    for (let i = 0; i < arr.length - 1; i++) {

        // If the current number is greater
        // than the next number, the array is not sorted
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

// Examples
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false

// Time Complexity: O(n)
// Space Complexity: O(1)
```
