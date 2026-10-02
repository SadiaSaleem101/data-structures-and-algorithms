// Check if Two Strings Have the Same Characters
//
// Example:
// Input: "listen", "silent"
// Output: true

function haveSameCharacters(str1, str2) {

    // Different lengths mean different characters/frequencies
    if (str1.length !== str2.length) {
        return false;
    }

    let frequency = new Map();

    // Count characters in the first string
    for (let i = 0; i < str1.length; i++) {
        let character = str1[i];

        if (frequency.has(character)) {
            frequency.set(character, frequency.get(character) + 1);
        } else {
            frequency.set(character, 1);
        }
    }

    // Subtract characters from the second string
    for (let i = 0; i < str2.length; i++) {
        let character = str2[i];

        if (!frequency.has(character)) {
            return false;
        }

        frequency.set(character, frequency.get(character) - 1);
    }

    // Make sure every count is zero
    for (let count of frequency.values()) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}

// Examples
console.log(haveSameCharacters("listen", "silent")); // true
console.log(haveSameCharacters("hello", "world"));   // false

// Time Complexity: O(n)
// Space Complexity: O(n)
