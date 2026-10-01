```javascript
// Count the Frequency of Each Element
// Count how many times each number appears in an array.

// Example:
// Input: [1, 2, 2, 3, 1, 2]
// Output:
// 1 → 2
// 2 → 3
// 3 → 1

function countFrequency(arr) {
    let frequency = new Map();

    // Go through every number
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        // If the number already exists, increase its count
        if (frequency.has(number)) {
            frequency.set(number, frequency.get(number) + 1);
        } else {
            // If it is the first time, set count to 1
            frequency.set(number, 1);
        }
    }

    return frequency;
}

// Example
console.log(countFrequency([1, 2, 2, 3, 1, 2]));

// Time Complexity: O(n)
// Space Complexity: O(n)
```
