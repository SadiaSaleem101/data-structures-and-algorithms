
function lengthOfLongestSubstringKDistinct(s, k) {
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

        // Shrink the window if there are too many
        // distinct characters.
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

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
// 3

console.log(lengthOfLongestSubstringKDistinct("aa", 1));
// 2

console.log(lengthOfLongestSubstringKDistinct("abc", 2));
// 2

console.log(lengthOfLongestSubstringKDistinct("abc", 0));
// 0
