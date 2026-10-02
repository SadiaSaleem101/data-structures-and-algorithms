// Count the Number of Words
// Count how many words are present in a sentence.

// Example:
// Input: "I love learning JavaScript"
// Output: 4

function countWords(str) {
    // Remove extra spaces from the beginning and end
    str = str.trim();

    // If the string is empty, return 0
    if (str === "") {
        return 0;
    }

    // Split the sentence into words
    let words = str.split(/\s+/);

    return words.length;
}

// Examples
console.log(countWords("I love learning JavaScript")); // 4
console.log(countWords("Hello world")); // 2
console.log(countWords("")); // 0

// Time Complexity: O(n)
// Space Complexity: O(n)
