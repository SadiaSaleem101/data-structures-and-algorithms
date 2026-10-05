
function isValid(s) {
    const stack = [];

    const matchingBrackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const char of s) {
        // Opening bracket
        if (
            char === "(" ||
            char === "[" ||
            char === "{"
        ) {
            stack.push(char);
        } else {
            // Closing bracket
            if (stack.length === 0) {
                return false;
            }

            const last = stack.pop();

            if (last !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    // No unmatched opening brackets should remain
    return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("([{}])"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("((("));
