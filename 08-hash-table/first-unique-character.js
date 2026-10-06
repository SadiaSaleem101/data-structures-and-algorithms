
function firstUniqChar(s) {
    const frequency = new Map();

    // Count each character
    for (const char of s) {
        frequency.set(
            char,
            (frequency.get(char) || 0) + 1
        );
    }

    // Find the first character that appears once
    for (let i = 0; i < s.length; i++) {
        if (frequency.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstUniqChar("leetcode"));     // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb"));         // -1
console.log(firstUniqChar("z"));            // 0
