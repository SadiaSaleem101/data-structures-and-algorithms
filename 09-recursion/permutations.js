function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(current) {
        // Base case
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip numbers already used
            if (used[i]) {
                continue;
            }

            // Choose
            used[i] = true;
            current.push(nums[i]);

            // Explore
            backtrack(current);

            // Undo choice
            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);

    return result;
}

console.log(permute([1, 2, 3]));
