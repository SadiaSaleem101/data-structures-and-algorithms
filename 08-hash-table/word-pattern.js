function wordPattern(pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check character -> word mapping
        if (charToWord.has(char) && charToWord.get(char) !== word) {
            return false;
        }

        // Check word -> character mapping
        if (wordToChar.has(word) && wordToChar.get(word) !== char) {
            return false;
        }

        charToWord.set(char, word);
        wordToChar.set(word, char);
    }

    return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
// true

console.log(wordPattern("abba", "dog cat cat fish"));
// false

console.log(wordPattern("aaaa", "dog dog dog dog"));
// true

console.log(wordPattern("abba", "dog dog dog dog"));
// false
