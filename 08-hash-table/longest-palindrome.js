function longestPalindrome(s) {
    const frequency = new Map();
    let length = 0;
    let hasOdd = false;

    // Count each character
    for (const char of s) {
        frequency.set(
            char,
            (frequency.get(char) || 0) + 1
        );
    }

    // Use pairs of characters
    for (const count of frequency.values()) {
        length += Math.floor(count / 2) * 2;

        // An odd character can be placed in the center
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length++;
    }

    return length;
}

console.log(longestPalindrome("abccccdd"));
// 7

console.log(longestPalindrome("a"));
// 1

console.log(longestPalindrome("bb"));
// 2

console.log(longestPalindrome("abc"));
// 1
