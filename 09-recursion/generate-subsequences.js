function generateSubsequences(s) {
    const result = [];

    function backtrack(index, current) {
        // Base case
        if (index === s.length) {
            result.push(current);
            return;
        }

        // Choice 1: Include current character
        backtrack(index + 1, current + s[index]);

        // Choice 2: Skip current character
        backtrack(index + 1, current);
    }

    backtrack(0, "");

    return result;
}

console.log(generateSubsequences("abc"));
