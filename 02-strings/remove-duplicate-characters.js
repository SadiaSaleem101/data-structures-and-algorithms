// Remove Duplicate Characters
// Keep only the first occurrence of each character.

// Example:
// Input: "programming"
// Output: "progamin"

function removeDuplicateCharacters(str) {
    let result = "";
    let seen = new Set();

    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        if (!seen.has(character)) {
            result += character;
            seen.add(character);
        }
    }

    return result;
}

// Examples
console.log(removeDuplicateCharacters("programming")); // progamin
console.log(removeDuplicateCharacters("hello"));        // helo
console.log(removeDuplicateCharacters("aabbcc"));      // abc

// Time Complexity: O(n)
// Space Complexity: O(n)
