function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters
        while (
            left < right &&
            !/[a-zA-Z0-9]/.test(s[left])
        ) {
            left++;
        }

        while (
            left < right &&
            !/[a-zA-Z0-9]/.test(s[right])
        ) {
            right--;
        }

        // Compare characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true

console.log(isPalindrome("race a car"));
// false

console.log(isPalindrome(" "));
// true

console.log(isPalindrome("Madam"));
// true
