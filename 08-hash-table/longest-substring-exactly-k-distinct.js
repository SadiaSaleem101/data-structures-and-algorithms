
function longestSubstringExactlyK(s, k) {
    if (k <= 0 || s.length === 0) {
        return 0;
    }

    const frequency = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        frequency.set(
            char,
            (frequency.get(char) || 0) + 1
        );

        // Shrink while there are too many distinct characters
        while (frequency.size > k) {
            const leftChar = s[left];

            frequency.set(
                leftChar,
                frequency.get(leftChar) - 1
            );

            if (frequency.get(leftChar) === 0) {
                frequency.delete(leftChar);
            }

            left++;
        }

        // Record only windows with exactly k distinct characters
        if (frequency.size === k) {
            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }
    }

    return maxLength;
}

console.log(longestSubstringExactlyK("aabacbebebe", 3));
// 7

console.log(longestSubstringExactlyK("aabbcc", 2));
// 4

console.log(longestSubstringExactlyK("aaaa", 2));
// 0

console.log(longestSubstringExactlyK("abc", 3));
// 3
