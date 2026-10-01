```javascript
// Reverse an Array
// Reverse the elements of an array.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function reverseArray(arr) {
    let reversed = [];

    // Start from the last element
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

// Example
console.log(reverseArray([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]

// Time Complexity: O(n)
// Space Complexity: O(n)
```
