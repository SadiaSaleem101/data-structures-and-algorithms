function findPeakGrid(mat) {
    let rows = mat.length;
    let cols = mat[0].length;

    let left = 0;
    let right = cols - 1;

    while (left <= right) {
        let midCol = Math.floor((left + right) / 2);
        let maxRow = 0;

        // Find the largest element in the middle column
        for (let row = 0; row < rows; row++) {
            if (mat[row][midCol] > mat[maxRow][midCol]) {
                maxRow = row;
            }
        }

        let leftValue = midCol > 0
            ? mat[maxRow][midCol - 1]
            : -1;

        let rightValue = midCol < cols - 1
            ? mat[maxRow][midCol + 1]
            : -1;

        // Check whether this element is a peak
        if (
            mat[maxRow][midCol] > leftValue &&
            mat[maxRow][midCol] > rightValue
        ) {
            return [maxRow, midCol];
        }

        // Move toward the larger neighboring column
        if (rightValue > mat[maxRow][midCol]) {
            left = midCol + 1;
        } else {
            right = midCol - 1;
        }
    }

    return [-1, -1];
}

console.log(findPeakGrid([
    [1, 4],
    [3, 2]
])); // [0, 1]

console.log(findPeakGrid([
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32]
])); // One valid answer: [2, 2]
