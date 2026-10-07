function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, current, remaining) {
        // Target reached
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        // Target exceeded
        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];

            // Choose
            current.push(num);

            // i instead of i + 1 because we can reuse
            // the same number
            backtrack(i, current, remaining - num);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0, [], target);

    return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
// [[2, 2, 3], [7]]

console.log(combinationSum([2, 3, 5], 8));
// [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
