// Check if a String Ends With a Specific Character
// Return true if the string ends with the given character.

// Example:
// Input: "JavaScript", "t"
// Output: true

function endsWithCharacter(str, character) {
    return str.endsWith(character);
}

// Examples
console.log(endsWithCharacter("JavaScript", "t")); // true
console.log(endsWithCharacter("JavaScript", "J")); // false
console.log(endsWithCharacter("hello", "o"));       // true

// Time Complexity: O(1)
// Space Complexity: O(1)
