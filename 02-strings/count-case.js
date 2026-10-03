// Count Uppercase and Lowercase Letters
// Count the number of uppercase and lowercase letters.

// Example:
// Input: "Hello World"
// Output:
// Uppercase: 2
// Lowercase: 8

function countCase(str) {
    let uppercase = 0;
    let lowercase = 0;

    // Check every character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Check for uppercase letters
        if (character >= "A" && character <= "Z") {
            uppercase++;
        }

        // Check for lowercase letters
        else if (character >= "a" && character <= "z") {
            lowercase++;
        }
    }

    return {
        uppercase: uppercase,
        lowercase: lowercase
    };
}

// Example
console.log(countCase("Hello World"));
// { uppercase: 2, lowercase: 8 }

// Time Complexity: O(n)
// Space Complexity: O(1)
