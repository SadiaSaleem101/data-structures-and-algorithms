function partition(s) {
    const result = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    function backtrack(start, current) {
        // Entire string has been partitioned
        if (start === s.length) {
            result.push([...current]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            // Only choose a palindrome substring
            if (!isPalindrome(s, start, end)) {
                continue;
            }

            // Choose
            current.push(s.substring(start, end + 1));

            // Explore the remaining string
            backtrack(end + 1, current);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0, []);

    return result;
}

console.log(partition("aab"));

// [
//   ["a", "a", "b"],
//   ["aa", "b"]
// ]

console.log(partition("a"));
// [["a"]]

console.log(partition("aba"));
// [["a", "b", "a"], ["aba"]]
