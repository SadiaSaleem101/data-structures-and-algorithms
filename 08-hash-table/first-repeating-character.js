
function firstRepeatingChar(s) {
    const seen = new Set();

    for (const char of s) {
        if (seen.has(char)) {
            return char;
        }

        seen.add(char);
    }

    return -1;
}

console.log(firstRepeatingChar("abccba")); // "c"
console.log(firstRepeatingChar("hello"));  // "l"
console.log(firstRepeatingChar("abcd"));   // -1
console.log(firstRepeatingChar("aabb"));   // "a"
