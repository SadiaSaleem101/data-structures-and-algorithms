// Trim Whitespace From a String
// Remove spaces from the beginning and end of a string.

function trimWhitespace(str) {
    return str.trim();
}

// Examples
console.log(trimWhitespace("   hello   "));       // hello
console.log(trimWhitespace("  JavaScript  "));    // JavaScript
console.log(trimWhitespace("   Hello World   ")); // Hello World

// Time Complexity: O(n)
// Space Complexity: O(n)
