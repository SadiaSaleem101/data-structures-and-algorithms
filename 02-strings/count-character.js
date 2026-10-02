// Count Occurrences of a Character
// Count how many times a specific character appears.

// Example:
// Input: "programming"
// Character: "g"
// Output: 2

function countCharacter(str, character) {
    let count = 0;

    // Check every character
    for (let i = 0; i < str.length; i++) {

        if (str[i] === character) {
            count++;
        }
    }

    return count;
}

// Example
console.log(countCharacter("programming", "g")); // 2
console.log(countCharacter("hello", "l")); // 2

// Time Complexity: O(n)
// Space Complexity: O(1)
