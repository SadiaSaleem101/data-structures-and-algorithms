// Check if a string contains only numbers.
// Return true if every character is a digit.

// Example:
// Input: "12345"
// Output: true

function containsOnlyNumbers(str) {
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Check if the character is not a number
        if (character < "0" || character > "9") {
            return false;
        }
    }

    return true;
}

// Examples
console.log(containsOnlyNumbers("12345")); // true
console.log(containsOnlyNumbers("9876"));  // true
console.log(containsOnlyNumbers("123a5")); // false
console.log(containsOnlyNumbers("12 34")); // false

// Time Complexity: O(n)
// Space Complexity: O(1)
