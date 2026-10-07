function isPalindrome(s, left = 0, right = s.length - 1) {
    // Base case
    if (left >= right) {
        return true;
    }

    // If characters don't match
    if (s[left] !== s[right]) {
        return false;
    }

    // Move toward the center
    return isPalindrome(s, left + 1, right - 1);
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("a"));       // true
console.log(isPalindrome(""));        // true
