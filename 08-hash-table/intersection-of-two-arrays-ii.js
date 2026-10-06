
function intersect(nums1, nums2) {
    const frequency = new Map();
    const result = [];

    // Count occurrences in the first array
    for (const num of nums1) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    // Find common occurrences in the second array
    for (const num of nums2) {
        if (frequency.has(num) && frequency.get(num) > 0) {
            result.push(num);
            frequency.set(num, frequency.get(num) - 1);
        }
    }

    return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
// [2, 2]

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// [9, 4]

console.log(intersect([1, 2, 3], [4, 5, 6]));
// []
