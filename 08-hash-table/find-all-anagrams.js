
function findAnagrams(s, p) {
    const result = [];

    if (p.length > s.length) {
        return result;
    }

    const needed = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    function index(char) {
        return char.charCodeAt(0) - 97;
    }

    for (const char of p) {
        needed[index(char)]++;
    }

    for (let right = 0; right < s.length; right++) {
        window[index(s[right])]++;

        // Remove the character outside the window
        if (right >= p.length) {
            window[index(s[right - p.length])]--;
        }

        // Check whether the window matches p
        if (needed.every((count, i) => count === window[i])) {
            result.push(right - p.length + 1);
        }
    }

    return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
// [0, 6]

console.log(findAnagrams("abab", "ab"));
// [0, 1, 2]

console.log(findAnagrams("hello", "xyz"));
// []
