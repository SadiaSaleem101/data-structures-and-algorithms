function subarraysDivByK(nums, k) {
    const remainderCount = new Map();

    // Remainder 0 exists before the array starts
    remainderCount.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (const num of nums) {
        prefixSum += num;

        // JavaScript can produce negative remainders,
        // so normalize it to the range [0, k - 1].
        const remainder = ((prefixSum % k) + k) % k;

        if (remainderCount.has(remainder)) {
            count += remainderCount.get(remainder);
        }

        remainderCount.set(
            remainder,
            (remainderCount.get(remainder) || 0) + 1
        );
    }

    return count;
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
// 7

console.log(subarraysDivByK([5], 5));
// 1

console.log(subarraysDivByK([1, 2, 3], 3));
// 3
