// Check if Two Strings Are Anagrams
// Two strings are anagrams if they contain
// the same characters with the same frequency.

// Example:
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {

    // If lengths are different, they cannot be anagrams
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

    // Remove characters using the second string
    for (let i = 0; i < str2.length; i++) {
        let character = str2[i];

        if (!frequency.has(character)) {
            return false;
        }

        frequency.set(character, frequency.get(character) - 1);
    }

    // Check that every character count is zero
    for (let count of frequency.values()) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}

// Examples
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

// Time Complexity: O(n)
// Space Complexity: O(n)
