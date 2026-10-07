function solveSudoku(board) {
    function isValid(row, col, num) {
        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) {
                return false;
            }
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) {
                return false;
            }
        }

        // Check 3 x 3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;

        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    function backtrack() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                // Skip filled cells
                if (board[row][col] !== ".") {
                    continue;
                }

                // Try numbers 1 to 9
                for (let num = 1; num <= 9; num++) {
                    const value = String(num);

                    if (isValid(row, col, value)) {
                        // Choose
                        board[row][col] = value;

                        // Explore
                        if (backtrack()) {
                            return true;
                        }

                        // Backtrack
                        board[row][col] = ".";
                    }
                }

                // No number works here
                return false;
            }
        }

        // All cells filled
        return true;
    }

    backtrack();
}
