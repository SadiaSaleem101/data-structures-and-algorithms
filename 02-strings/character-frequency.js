// Character Frequency
// Count how many times each character appears in a string.

// Example:
// Input: "hello"
// Output:
// h → 1
// e → 1
// l → 2
// o → 1

function characterFrequency(str) {
    let frequency = new Map();

    // Go through every character
    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        // If character already exists, increase its count
        if (frequency.has(character)) {
            frequency.set(character, frequency.get(character) + 1);
        } else {
            // First occurrence
            frequency.set(character, 1);
        }
    }

    return frequency;
}

// Example
console.log(characterFrequency("hello"));

// Time Complexity: O(n)
// Space Complexity: O(n)
