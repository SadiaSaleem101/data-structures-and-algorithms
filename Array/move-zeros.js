```javascript
// Move All Zeros to the End
// Move all zeros to the end of the array.

// Example:
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    // Go through every number
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            // Count the zeros
            zeroCount++;
        } else {
            // Add non-zero numbers
            result.push(arr[i]);
        }
    }

    // Add zeros at the end
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}

// Example
console.log(moveZeros([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]

// Time Complexity: O(n)
// Space Complexity: O(n)
```
