// Capitalize the First Letter of Each Word
// Example:
// Input: "i love javascript"
// Output: "I Love Javascript"

function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    // Go through each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        // Capitalize the first letter
        let capitalizedWord =
            word[0].toUpperCase() + word.slice(1);

        result.push(capitalizedWord);
    }

    // Join the words back into a sentence
    return result.join(" ");
}

// Example
console.log(capitalizeWords("i love javascript"));
// Output: I Love Javascript

// Time Complexity: O(n)
// Space Complexity: O(n)
