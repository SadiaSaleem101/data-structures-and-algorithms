// Check if a String Contains Only Digits
// Return true if every character is a number.

// Example:
// Input: "12345"
// Output: true

function containsOnlyDigits(str) {

    // Check every character
    for (let i = 0; i < str.length; i++) {

        // If the character is not between 0 and 9
        if (str[i] < "0" || str[i] > "9") {
            return false;
        }
    }

    return true;
}

// Examples
console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("123a5")); // false
console.log(containsOnlyDigits("12 34")); // false

// Time Complexity: O(n)
// Space Complexity: O(1)
