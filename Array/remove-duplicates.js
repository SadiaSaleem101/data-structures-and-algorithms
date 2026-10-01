```javascript
// Remove Duplicates from a Sorted Array
// Remove repeated numbers from an array.

// Example:
// Input: [1, 1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
    let result = [];

    // Check every number in the array
    for (let i = 0; i < arr.length; i++) {

        // Add the number only if it is not already in result
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

// Example
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));
// Output: [1, 2, 3, 4]

// Time Complexity: O(n²)
// Space Complexity: O(n)
```
