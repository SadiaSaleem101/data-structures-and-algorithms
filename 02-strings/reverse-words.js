// Reverse Words in a String
// Reverse the order of words in a sentence.

// Example:
// Input: "I love JavaScript"
// Output: "JavaScript love I"

function reverseWords(str) {
    // Split the sentence into words
    let words = str.split(" ");

    // Reverse the words
    words.reverse();

    // Join the words back into a sentence
    return words.join(" ");
}

// Example
console.log(reverseWords("I love JavaScript"));
// Output: JavaScript love I

// Time Complexity: O(n)
// Space Complexity: O(n)
