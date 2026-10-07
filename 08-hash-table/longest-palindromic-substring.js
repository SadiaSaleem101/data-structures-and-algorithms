function longestPalindrome(s) {
    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let end = 0;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        const oddLength = expand(i, i);

        // Even-length palindrome
        const evenLength = expand(i, i + 1);

        const length = Math.max(oddLength, evenLength);

        if (length > end - start + 1) {
            start = i - Math.floor((length - 1) / 2);
            end = i + Math.floor(length / 2);
        }
    }

    return s.substring(start, end + 1);
}

console.log(longestPalindrome("babad"));
// "bab"

console.log(longestPalindrome("cbbd"));
// "bb"

console.log(longestPalindrome("a"));
// "a"

console.log(longestPalindrome("racecar"));
// "racecar"
