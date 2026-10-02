// Merge Two Sorted Arrays
// Combine two sorted arrays into one sorted array.

// Example:
// Input: [1, 3, 5]
//        [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(arr1, arr2) {
    let result = [];

    // Add all elements from both arrays
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    // Sort the combined array
    result.sort((a, b) => a - b);

    return result;
}

// Example
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]

// Time Complexity: O((n + m) log(n + m))
// Space Complexity: O(n + m)
