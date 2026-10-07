function combinationSum2(candidates, target) {
    const result = [];

    // Sort so duplicates can be skipped
    candidates.sort((a, b) => a - b);

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicate choices at the same level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Since the array is sorted
            if (candidates[i] > remaining) {
                break;
            }

            // Choose
            current.push(candidates[i]);

            // i + 1 because each number can be used only once
            backtrack(i + 1, current, remaining - candidates[i]);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0, [], target);

    return result;
}

console.log(
    combinationSum2(
        [10, 1, 2, 7, 6, 1, 5],
        8
    )
);

// [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6]
// ]
