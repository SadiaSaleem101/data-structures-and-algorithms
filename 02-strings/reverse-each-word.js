// Reverse Each Word in a String
// Reverse the letters of every word.

// Example:
// Input: "I love JavaScript"
// Output: "I evol tpircSavaJ"

function reverseEachWord(str) {
    let words = str.split(" ");
    let result = [];

    // Go through each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = "";

        // Reverse the current word
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        result.push(reversedWord);
    }

    // Join the reversed words
    return result.join(" ");
}

// Example
console.log(reverseEachWord("I love JavaScript"));
// Output: I evol tpircSavaJ

// Time Complexity: O(n)
// Space Complexity: O(n)
