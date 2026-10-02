// Check if a String Has All Unique Characters
// Return true if every character appears only once.

// Example:
// Input: "abcde"
// Output: true

function hasUniqueCharacters(str) {
    let seen = new Set();

    // Check every character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // If we have already seen this character,
        // it is not unique
        if (seen.has(character)) {
            return false;
        }

        // Add the character to the Set
        seen.add(character);
    }

    return true;
}

// Examples
console.log(hasUniqueCharacters("abcde")); // true
console.log(hasUniqueCharacters("hello")); // false

// Time Complexity: O(n)
// Space Complexity: O(n)
