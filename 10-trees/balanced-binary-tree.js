// Find the Most Frequent Character
// Find the character that appears the most times.

// Example:
// Input: "programming"
// Output: "r"

function mostFrequentCharacter(str) {
    let frequency = new Map();

    // Count each character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        if (frequency.has(character)) {
            frequency.set(character, frequency.get(character) + 1);
        } else {
            frequency.set(character, 1);
        }
    }

    let mostFrequent = str[0];
    let highestCount = frequency.get(str[0]);

    // Find the character with the highest count
    for (let [character, count] of frequency) {
        if (count > highestCount) {
            highestCount = count;
            mostFrequent = character;
        }
    }

    return mostFrequent;
}

// Example
console.log(mostFrequentCharacter("programming"));
// Output: r

// Time Complexity: O(n)
// Space Complexity: O(n)
