// Find the first vowel in a string.
// Return the first vowel found.

// Example:
// Input: "JavaScript"
// Output: "a"

function findFirstVowel(str) {
    for (let i = 0; i < str.length; i++) {
        let character = str[i].toLowerCase();

        if (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        ) {
            return character;
        }
    }

    return null;
}

// Examples
console.log(findFirstVowel("JavaScript")); // a
console.log(findFirstVowel("Hello"));      // e
console.log(findFirstVowel("rhythm"));     // null

// Time Complexity: O(n)
// Space Complexity: O(1)
