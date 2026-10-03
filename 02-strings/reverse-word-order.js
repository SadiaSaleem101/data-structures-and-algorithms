// Reverse the order of words in a string.

// Example:
// Input: "I love JavaScript"
// Output: "JavaScript love I"

function reverseWordOrder(str) {
    let words = str.trim().split(/\s+/);
    let result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }

    return result.join(" ");
}

// Examples
console.log(reverseWordOrder("I love JavaScript")); // JavaScript love I
console.log(reverseWordOrder("Hello World"));       // World Hello
console.log(reverseWordOrder("I am learning DSA")); // DSA learning am I

// Time Complexity: O(n)
// Space Complexity: O(n)
