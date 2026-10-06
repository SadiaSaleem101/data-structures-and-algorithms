
function characterReplacement(s, k) {
    const frequency = new Map();
    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        frequency.set(char, (frequency.get(char) || 0) + 1);

        maxFrequency = Math.max(
            maxFrequency,
            frequency.get(char)
        );

        // Characters that need replacing
        while ((right - left + 1) - maxFrequency > k) {
            const leftChar = s[left];
            frequency.set(
                leftChar,
                frequency.get(leftChar) - 1
            );
            left++;
        }

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

console.log(characterReplacement("ABAB", 2));    // 4
console.log(characterReplacement("AABABBA", 1)); // 4
console.log(characterReplacement("AAAA", 2));    // 4
console.log(characterReplacement("ABCDE", 1));   // 2
