```javascript
// Find the Most Frequent Element
// Find the number that appears the most times.

// Example:
// Input: [1, 2, 2, 3, 1, 2]
// Output: 2

function findMostFrequent(arr) {
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

    let mostFrequent = arr[0];
    let highestCount = frequency.get(arr[0]);

    // Find the number with the highest count
    for (let [number, count] of frequency) {
        if (count > highestCount) {
            highestCount = count;
            mostFrequent = number;
        }
    }

    return mostFrequent;
}

// Example
console.log(findMostFrequent([1, 2, 2, 3, 1, 2]));
// Output: 2

// Time Complexity: O(n)
// Space Complexity: O(n)
```
