// Find the First Occurrence of a Character
// Return the index of the first time the character appears.

// Example:
// Input: "programming", "g"
// Output: 3

function firstOccurrence(str, character) {

    // Check every character
    for (let i = 0; i < str.length; i++) {

        // If we find the character, return its index
        if (str[i] === character) {
            return i;
        }
    }

    // Return -1 if the character is not found
    return -1;
}

// Examples
console.log(firstOccurrence("programming", "g")); // 3
console.log(firstOccurrence("hello", "z")); // -1

// Time Complexity: O(n)
// Space Complexity: O(1)
