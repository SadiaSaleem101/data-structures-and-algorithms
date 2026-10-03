// Check if a String Contains a Specific Word
// Return true if the word exists in the string.

// Example:
// Input: "I am learning JavaScript"
// Word: "JavaScript"
// Output: true

function containsWord(str, word) {
    return str.includes(word);
}

// Examples
console.log(containsWord("I am learning JavaScript", "JavaScript")); // true
console.log(containsWord("I am learning JavaScript", "Python"));    // false

// Time Complexity: O(n)
// Space Complexity: O(1)
