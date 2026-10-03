// Count the number of spaces in a string.

// Example:
// Input: "I love JavaScript"
// Output: 2

function countSpaces(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }

    return count;
}

// Examples
console.log(countSpaces("I love JavaScript")); // 2
console.log(countSpaces("Hello World"));       // 1
console.log(countSpaces("JavaScript"));         // 0

// Time Complexity: O(n)
// Space Complexity: O(1)
