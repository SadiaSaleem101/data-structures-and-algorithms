// Reverse a String
// Reverse the characters in a string.

// Example:
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
    let reversed = "";

    // Start from the last character
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Example
console.log(reverseString("hello")); // olleh

// Time Complexity: O(n)
// Space Complexity: O(n)
