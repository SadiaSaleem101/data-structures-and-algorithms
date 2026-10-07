function longestPalindromeSet(s) {
    const set = new Set();
    let length = 0;

    for (const char of s) {
        if (set.has(char)) {
            // We found a pair
            set.delete(char);
            length += 2;
        } else {
            set.add(char);
        }
    }

    // One unpaired character can go in the center
    if (set.size > 0) {
        length++;
    }

    return length;
}

console.log(longestPalindromeSet("abccccdd"));
// 7

console.log(longestPalindromeSet("a"));
// 1

console.log(longestPalindromeSet("bb"));
// 2

console.log(longestPalindromeSet("abc"));
// 1
