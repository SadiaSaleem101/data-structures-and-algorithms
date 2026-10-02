// Longest Common Prefix
// Find the longest starting part common to all strings.

// Example:
// Input: ["flower", "flow", "flight"]
// Output: "fl"

function longestCommonPrefix(words) {
    // Start with the first word
    let prefix = words[0];

    // Compare it with the remaining words
    for (let i = 1; i < words.length; i++) {

        // Keep removing the last character
        // until the word starts with the prefix
        while (!words[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            // If there is no common prefix
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

// Example
console.log(
    longestCommonPrefix(["flower", "flow", "flight"])
);
// Output: fl
