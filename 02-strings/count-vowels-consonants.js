// Count Vowels and Consonants
// Count the number of vowels and consonants in a string.

// Example:
// Input: "hello world"
// Vowels: 3
// Consonants: 7

function countVowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;

    // Convert the string to lowercase
    str = str.toLowerCase();

    // Check every character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // Check if the character is a letter
        if (character >= "a" && character <= "z") {

            // Check if it is a vowel
            if (
                character === "a" ||
                character === "e" ||
                character === "i" ||
                character === "o" ||
                character === "u"
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return {
        vowels: vowels,
        consonants: consonants
    };
}

// Example
console.log(countVowelsAndConsonants("hello world"));
// { vowels: 3, consonants: 7 }

// Time Complexity: O(n)
// Space Complexity: O(1)
