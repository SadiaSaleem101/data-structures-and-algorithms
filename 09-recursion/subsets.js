function subsets(nums) {
    const result = [];

    function backtrack(index, current) {
        // Add the current subset
        result.push([...current]);

        // Try adding each remaining number
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);

            backtrack(i + 1, current);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0, []);

    return result;
}

console.log(subsets([1, 2, 3]));
