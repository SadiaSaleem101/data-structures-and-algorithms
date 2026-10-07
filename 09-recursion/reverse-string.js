function reverseString(s) {
    // Base case
    if (s.length <= 1) {
        return s;
    }

    // Recursive case
    return reverseString(s.slice(1)) + s[0];
}

console.log(reverseString("hello"));
// "olleh"

console.log(reverseString("Sadia"));
// "aidaS"

console.log(reverseString("abc"));
// "cba"

console.log(reverseString("a"));
// "a"
