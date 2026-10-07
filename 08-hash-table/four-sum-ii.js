function fourSumCount(nums1, nums2, nums3, nums4) {
    const sumMap = new Map();
    let count = 0;

    // Store all sums of nums1 + nums2
    for (const a of nums1) {
        for (const b of nums2) {
            const sum = a + b;

            sumMap.set(
                sum,
                (sumMap.get(sum) || 0) + 1
            );
        }
    }

    // Look for the opposite sum
    for (const c of nums3) {
        for (const d of nums4) {
            const sum = c + d;
            const required = -sum;

            if (sumMap.has(required)) {
                count += sumMap.get(required);
            }
        }
    }

    return count;
}

console.log(
    fourSumCount(
        [1, 2],
        [-2, -1],
        [-1, 2],
        [0, 2]
    )
);
// 2

console.log(
    fourSumCount(
        [0],
        [0],
        [0],
        [0]
    )
);
// 1
