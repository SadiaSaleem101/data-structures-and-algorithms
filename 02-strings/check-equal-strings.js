// Check if Two Strings are Equal
// Return true if both strings are exactly the same.

// Example:
// Input: "hello", "hello"
// Output: true

function areStringsEqual(str1, str2) {
    return str1 === str2;
}

// Examples
console.log(areStringsEqual("hello", "hello")); // true
console.log(areStringsEqual("hello", "Hello")); // false
console.log(areStringsEqual("JavaScript", "JavaScript")); // true

// Time Complexity: O(n)
// Space Complexity: O(1)
