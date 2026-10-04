function searchMatrixII(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Start at the top-right corner
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        let value = matrix[row][col];

        if (value === target) {
            return true;
        } else if (value > target) {
            // Current column values below are even larger
            col--;
        } else {
            // Current row values to the left are smaller
            row++;
        }
    }

    return false;
}

console.log(searchMatrixII([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5)); // true

console.log(searchMatrixII([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 20)); // false
