
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return [...result];
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
// [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// [9, 4]

console.log(intersection([1, 3, 5], [2, 4, 6]));
// []
