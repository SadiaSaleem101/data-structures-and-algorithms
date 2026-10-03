// Check if a string contains only letters.
// Return true if every character is a letter.

// Example:
// Input: "Hello"
// Output: true

function containsOnlyLetters(str) {
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Check if character is not a letter
        if (
            !(character >= "A" && character <= "Z") &&
            !(character >= "a" && character <= "z")
        ) {
            return false;
        }
    }

    return true;
}

// Examples
console.log(containsOnlyLetters("Hello"));       // true
console.log(containsOnlyLetters("JavaScript"));  // true
console.log(containsOnlyLetters("Hello123"));    // false
console.log(containsOnlyLetters("Hello World")); // false

// Time Complexity: O(n)
// Space Complexity: O(1)
