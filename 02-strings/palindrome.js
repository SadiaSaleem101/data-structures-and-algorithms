// Check if a String is a Palindrome
// A palindrome reads the same forward and backward.

// Example:
// Input: "madam"
// Output: true

function isPalindrome(str) {
    let reversed = "";

    // Reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    // Compare the original and reversed strings
    if (str === reversed) {
        return true;
    }

    return false;
}

// Examples
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Time Complexity: O(n)
// Space Complexity: O(n)
