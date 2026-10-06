
function subarraySum(nums, k) {
  const prefixCount = new Map();

  // An empty prefix has sum 0 and occurs once.
  prefixCount.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;

    // Look for an earlier prefix whose sum is prefixSum - k.
    const needed = prefixSum - k;

    if (prefixCount.has(needed)) {
      count += prefixCount.get(needed);
    }

    prefixCount.set(
      prefixSum,
      (prefixCount.get(prefixSum) || 0) + 1
    );
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, -1, 0], 0)); // 3
