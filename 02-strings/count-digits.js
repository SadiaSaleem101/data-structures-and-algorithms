// Count the Number of Digits in a String
// Count how many characters are numbers.

// Example:
// Input: "hello123world45"
// Output: 5

function countDigits(str) {
    let count = 0;

    // Check every character
    for (let i = 0; i < str.length; i++) {

        // Check if the character is between 0 and 9
        if (str[i] >= "0" && str[i] <= "9") {
            count++;
        }
    }

    return count;
}

// Example
console.log(countDigits("hello123world45")); // 5

// Time Complexity: O(n)
// Space Complexity: O(1)
