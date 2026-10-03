// Count how many times a specific character appears in a string.

// Example:
// Input: "programming", "g"
// Output: 2

function countCharacterOccurrences(str, character) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === character) {
            count++;
        }
    }

    return count;
}

// Examples
console.log(countCharacterOccurrences("programming", "g")); // 2
console.log(countCharacterOccurrences("hello", "l"));        // 2
console.log(countCharacterOccurrences("javascript", "a"));   // 2

// Time Complexity: O(n)
// Space Complexity: O(1)
