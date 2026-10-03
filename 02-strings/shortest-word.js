// Find the shortest word in a string.

// Example:
// Input: "I love learning JavaScript"
// Output: "I"

function findShortestWord(str) {
    let words = str.trim().split(/\s+/);
    let shortestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }

    return shortestWord;
}

// Examples
console.log(findShortestWord("I love learning JavaScript")); // I
console.log(findShortestWord("Hello my friend"));             // my
console.log(findShortestWord("JavaScript is fun"));           // is

// Time Complexity: O(n)
// Space Complexity: O(n)
