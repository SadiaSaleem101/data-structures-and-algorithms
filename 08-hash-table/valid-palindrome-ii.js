function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    while (left < right) {
        if (s[left] !== s[right]) {
            // Try deleting the left character
            // or deleting the right character
            return (
                isPalindrome(left + 1, right) ||
                isPalindrome(left, right - 1)
            );
        }

        left++;
        right--;
    }

    return true;
}

console.log(validPalindrome("aba"));
// true

console.log(validPalindrome("abca"));
// true

console.log(validPalindrome("abc"));
// false

console.log(validPalindrome("deeee"));
// true
