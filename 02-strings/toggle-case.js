// Toggle the Case of Every Character
// Uppercase becomes lowercase.
// Lowercase becomes uppercase.

// Example:
// Input: "Hello World"
// Output: "hELLO wORLD"

function toggleCase(str) {
    let result = "";

    // Check every character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // If the character is uppercase
        if (character >= "A" && character <= "Z") {
            result += character.toLowerCase();
        }

        // If the character is lowercase
        else if (character >= "a" && character <= "z") {
            result += character.toUpperCase();
        }

        // Keep spaces and other characters unchanged
        else {
            result += character;
        }
    }

    return result;
}

// Example
console.log(toggleCase("Hello World"));
// Output: hELLO wORLD

// Time Complexity: O(n)
// Space Complexity: O(n)
