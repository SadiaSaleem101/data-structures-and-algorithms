
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const needed = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    function index(char) {
        return char.charCodeAt(0) - 97;
    }

    for (const char of s1) {
        needed[index(char)]++;
    }

    for (let right = 0; right < s2.length; right++) {
        window[index(s2[right])]++;

        // Keep the window the same size as s1
        if (right >= s1.length) {
            window[index(s2[right - s1.length])]--;
        }

        if (needed.every((count, i) => count === window[i])) {
            return true;
        }
    }

    return false;
}

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("adc", "dcda"));    // true
