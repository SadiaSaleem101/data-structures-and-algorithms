// Majority Element
// Find the element that appears more than n / 2 times.

// Example:
// Input: [2, 2, 1, 1, 1, 2, 2]
// Output: 2

function findMajorityElement(arr) {
    let frequency = new Map();

    // Count how many times each number appears
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (frequency.has(number)) {
            frequency.set(number, frequency.get(number) + 1);
        } else {
            frequency.set(number, 1);
        }
    }

    // Find the number with more than n / 2 occurrences
    for (let [number, count] of frequency) {
        if (count > arr.length / 2) {
            return number;
        }
    }

    return -1;
}

// Example
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));
// Output: 2

// Time Complexity: O(n)
// Space Complexity: O(n)
