function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    const phone = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    const result = [];

    function backtrack(index, current) {
        // Base case
        if (index === digits.length) {
            result.push(current);
            return;
        }

        const letters = phone[digits[index]];

        for (const letter of letters) {
            // Choose
            backtrack(
                index + 1,
                current + letter
            );
        }
    }

    backtrack(0, "");

    return result;
}

console.log(letterCombinations("23"));
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

console.log(letterCombinations("2"));
// ["a", "b", "c"]

console.log(letterCombinations(""));
// []
