// Count Words Starting With a Vowel
// Count how many words start with a, e, i, o, or u.

// Example:
// Input: "Apple is an orange"
// Output: 4

function countWordsStartingWithVowel(str) {
    let words = str.trim().split(/\s+/);
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let firstCharacter = words[i][0].toLowerCase();

        if (
            firstCharacter === "a" ||
            firstCharacter === "e" ||
            firstCharacter === "i" ||
            firstCharacter === "o" ||
            firstCharacter === "u"
        ) {
            count++;
        }
    }

    return count;
}

// Examples
console.log(countWordsStartingWithVowel("Apple is an orange")); // 4
console.log(countWordsStartingWithVowel("I love JavaScript"));   // 1
console.log(countWordsStartingWithVowel("Hello world"));        // 0

// Time Complexity: O(n)
// Space Complexity: O(n)
