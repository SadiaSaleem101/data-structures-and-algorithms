// Find the Longest Word
// Find the longest word in a sentence.

// Example:
// Input: "I am learning JavaScript"
// Output: "JavaScript"

function findLongestWord(str) {
    // Split the sentence into words
    let words = str.split(" ");

    // Assume the first word is the longest
    let longestWord = words[0];

    // Check the remaining words
    for (let i = 1; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

// Example
console.log(findLongestWord("I am learning JavaScript"));
// Output: JavaScript

// Time Complexity: O(n)
// Space Complexity: O(n)
