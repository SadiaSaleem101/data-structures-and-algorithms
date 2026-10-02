// Remove Duplicate Characters
// Remove repeated characters from a string.

// Example:
// Input: "programming"
// Output: "progamin"

function removeDuplicates(str) {
    let result = "";
    let seen = new Set();

    // Check every character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Add the character only if we haven't seen it
        if (!seen.has(character)) {
            result += character;
            seen.add(character);
        }
    }

    return result;
}

// Example
console.log(removeDuplicates("programming"));
// Output: progamin

// Time Complexity: O(n)
// Space Complexity: O(n)
