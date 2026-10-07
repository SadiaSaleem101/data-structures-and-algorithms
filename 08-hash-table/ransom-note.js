function canConstruct(ransomNote, magazine) {
    const frequency = new Map();

    // Count characters in magazine
    for (const char of magazine) {
        frequency.set(
            char,
            (frequency.get(char) || 0) + 1
        );
    }

    // Use characters for ransomNote
    for (const char of ransomNote) {
        if (!frequency.has(char) || frequency.get(char) === 0) {
            return false;
        }

        frequency.set(
            char,
            frequency.get(char) - 1
        );
    }

    return true;
}

console.log(canConstruct("a", "b"));
// false

console.log(canConstruct("aa", "aab"));
// true

console.log(canConstruct("hello", "helloworld"));
// true

console.log(canConstruct("aabb", "ab"));
// false
