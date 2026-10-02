// First Non-Repeating Character
// Find the first character that appears only once.

// Example:
// Input: "aabbcde"
// Output: "c"

function firstNonRepeatingCharacter(str) {
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

    // Find the first character with count 1
    for (let i = 0; i < str.length; i++) {
        if (frequency.get(str[i]) === 1) {
            return str[i];
        }
    }

    return null;
}

// Example
console.log(firstNonRepeatingCharacter("aabbcde"));
// Output: c

// Time Complexity: O(n)
// Space Complexity: O(n)
