// Find the last vowel in a string.
// Return the last vowel found.

function findLastVowel(str) {
    for (let i = str.length - 1; i >= 0; i--) {
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
console.log(findLastVowel("JavaScript")); // i
console.log(findLastVowel("Hello"));      // o
console.log(findLastVowel("rhythm"));     // null

// Time Complexity: O(n)
// Space Complexity: O(1)
