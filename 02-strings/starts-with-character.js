// Check if a String Starts With a Specific Character
// Return true if the string starts with the given character.

// Example:
// Input: "JavaScript", "J"
// Output: true

function startsWithCharacter(str, character) {
    return str.startsWith(character);
}

// Examples
console.log(startsWithCharacter("JavaScript", "J")); // true
console.log(startsWithCharacter("JavaScript", "a")); // false
console.log(startsWithCharacter("hello", "h"));       // true

// Time Complexity: O(1)
// Space Complexity: O(1)
