function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(row, col, index) {
        // Found the complete word
        if (index === word.length) {
            return true;
        }

        // Out of bounds
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols
        ) {
            return false;
        }

        // Character doesn't match
        if (board[row][col] !== word[index]) {
            return false;
        }

        // Mark the cell as visited
        const original = board[row][col];
        board[row][col] = "#";

        // Explore four directions
        const found =
            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1);

        // Restore the cell
        board[row][col] = original;

        return found;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (backtrack(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE"));    // true
console.log(exist(board, "ABCB"));   // false
