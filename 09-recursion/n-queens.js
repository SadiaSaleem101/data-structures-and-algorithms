function solveNQueens(n) {
    const result = [];
    const board = Array.from(
        { length: n },
        () => Array(n).fill(".")
    );

    const columns = new Set();
    const diagonals = new Set();
    const antiDiagonals = new Set();

    function backtrack(row) {
        // All queens placed
        if (row === n) {
            result.push(
                board.map(row => row.join(""))
            );
            return;
        }

        for (let col = 0; col < n; col++) {
            const diagonal = row - col;
            const antiDiagonal = row + col;

            // Check if the position is safe
            if (
                columns.has(col) ||
                diagonals.has(diagonal) ||
                antiDiagonals.has(antiDiagonal)
            ) {
                continue;
            }

            // Choose
            board[row][col] = "Q";
            columns.add(col);
            diagonals.add(diagonal);
            antiDiagonals.add(antiDiagonal);

            // Explore next row
            backtrack(row + 1);

            // Backtrack
            board[row][col] = ".";
            columns.delete(col);
            diagonals.delete(diagonal);
            antiDiagonals.delete(antiDiagonal);
        }
    }

    backtrack(0);

    return result;
}

console.log(solveNQueens(4));
