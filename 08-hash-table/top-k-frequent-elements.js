
function topKFrequent(nums, k) {
  const frequency = new Map();

  // Count the occurrences of each number.
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  // Sort numbers by frequency, from highest to lowest.
  const sorted = [...frequency.entries()].sort(
    (a, b) => b[1] - a[1]
  );

  // Return the first k numbers.
  return sorted.slice(0, k).map(([num]) => num);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// [1, 2]

console.log(topKFrequent([1], 1));
// [1]
