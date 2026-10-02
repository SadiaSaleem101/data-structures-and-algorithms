// Rotate an Array
// Move the last element to the beginning.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]

function rotateArray(arr) {
    // Take the last element
    let last = arr[arr.length - 1];

    // Move every element one position to the right
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    // Put the last element at the beginning
    arr[0] = last;

    return arr;
}

// Example
console.log(rotateArray([1, 2, 3, 4, 5]));
// Output: [5, 1, 2, 3, 4]

// Time Complexity: O(n)
// Space Complexity: O(1)
