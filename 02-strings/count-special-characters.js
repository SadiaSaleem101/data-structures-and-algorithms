// Count the number of special characters in a string.
// Special characters are characters that are not letters, digits, or spaces.

// Example:
// Input: "Hello@World!"
// Output: 2

function countSpecialCharacters(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Check if the character is NOT a letter, digit, or space
        if (
            !(character >= "A" && character <= "Z") &&
            !(character >= "a" && character <= "z") &&
            !(character >= "0" && character <= "9") &&
            character !== " "
        ) {
            count++;
        }
    }

    return count;
}

// Examples
console.log(countSpecialCharacters("Hello@World!")); // 2
console.log(countSpecialCharacters("Hello123"));      // 0
console.log(countSpecialCharacters("Hi, Sadia!"));    // 2

// Time Complexity: O(n)
// Space Complexity: O(1)
