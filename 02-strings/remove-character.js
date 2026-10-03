// Remove a Specific Character from a String
// Remove every occurrence of a given character.

// Example:
// Input: "programming", "m"
// Output: "prograing"

function removeCharacter(str, character) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== character) {
            result += str[i];
        }
    }

    return result;
}

// Examples
console.log(removeCharacter("programming", "m")); // prograing
console.log(removeCharacter("hello", "l"));        // heo

// Time Complexity: O(n)
// Space Complexity: O(n)
