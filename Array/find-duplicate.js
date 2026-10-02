// Find the Duplicate Number
// Find the number that appears more than once.

// Example:
// Input: [1, 3, 4, 2, 2]
// Output: 2

function findDuplicate(arr) {
    let seen = new Set();

    // Check every number
    for (let i = 0; i < arr.length; i++) {

        // If we have already seen this number,
        // it is the duplicate
        if (seen.has(arr[i])) {
            return arr[i];
        }

        // Add the number to the Set
        seen.add(arr[i]);
    }

    return -1;
}

// Example
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

// Time Complexity: O(n)
// Space Complexity: O(n)
