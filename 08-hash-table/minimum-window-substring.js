
function minWindow(s, t) {
    if (t.length > s.length || t.length === 0) {
        return "";
    }

    const needed = new Map();

    for (const char of t) {
        needed.set(char, (needed.get(char) || 0) + 1);
    }

    let left = 0;
    let matched = 0;
    let start = 0;
    let minLength = Infinity;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (needed.has(char)) {
            needed.set(char, needed.get(char) - 1);

            if (needed.get(char) >= 0) {
                matched++;
            }
        }

        // All characters required by t are covered
        while (matched === t.length) {
            const windowLength = right - left + 1;

            if (windowLength < minLength) {
                minLength = windowLength;
                start = left;
            }

            const leftChar = s[left];

            if (needed.has(leftChar)) {
                needed.set(leftChar, needed.get(leftChar) + 1);

                if (needed.get(leftChar) > 0) {
                    matched--;
                }
            }

            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.substring(start, start + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
// "BANC"

console.log(minWindow("a", "a"));
// "a"

console.log(minWindow("a", "aa"));
// ""
