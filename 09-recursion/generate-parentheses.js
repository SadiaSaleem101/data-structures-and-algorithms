function generateParenthesis(n) {
    const result = [];

    function backtrack(current, open, close) {
        // Base case
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // We can add an opening parenthesis
        if (open < n) {
            backtrack(
                current + "(",
                open + 1,
                close
            );
        }

        // We can add a closing parenthesis
        // only if it won't make the string invalid
        if (close < open) {
            backtrack(
                current + ")",
                open,
                close + 1
            );
        }
    }

    backtrack("", 0, 0);

    return result;
}

console.log(generateParenthesis(3));

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
