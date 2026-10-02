// Check if a String Is a Subsequence
// Check whether str1 appears in str2
// in the same order.

// Example:
// str1 = "ace"
// str2 = "abcde"
// Output: true

function isSubsequence(str1, str2) {
    let i = 0;

    // Go through str2
    for (let j = 0; j < str2.length; j++) {

        // If characters match, move to the next
        // character in str1
        if (str1[i] === str2[j]) {
            i++;
        }
    }

    // If we matched every character in str1
    return i === str1.length;
}

// Examples
console.log(isSubsequence("ace", "abcde")); // true
console.log(isSubsequence("aec", "abcde")); // false

// Time Complexity: O(n)
// Space Complexity: O(1)
