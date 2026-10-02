// Remove All Spaces from a String
// Remove every space from a string.

// Example:
// Input: "I love JavaScript"
// Output: "IloveJavaScript"

function removeSpaces(str) {
    let result = "";

    // Check every character
    for (let i = 0; i < str.length; i++) {

        // Add the character only if it is not a space
        if (str[i] !== " ") {
            result += str[i];
        }
    }

    return result;
}

// Examples
console.log(removeSpaces("I love JavaScript"));
// Output: IloveJavaScript

console.log(removeSpaces("Hello World"));
// Output: HelloWorld

// Time Complexity: O(n)
// Space Complexity: O(n)
