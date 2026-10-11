
function numOfWays(nums) {
  const MOD = 1000000007;
  const n = nums.length;

  // Precompute combinations C(n, k).
  const comb = Array.from(
    { length: n + 1 },
    () => Array(n + 1).fill(0)
  );

  for (let i = 0; i <= n; i++) {
    comb[i][0] = 1;
    comb[i][i] = 1;

    for (let j = 1; j < i; j++) {
      comb[i][j] =
        (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
    }
  }

  function countWays(arr) {
    if (arr.length <= 2) return 1;

    const root = arr[0];
    const left = arr.slice(1).filter(x => x < root);
    const right = arr.slice(1).filter(x => x > root);

    const leftWays = countWays(left);
    const rightWays = countWays(right);

    const waysToInterleave = comb[left.length + right.length][left.length];

    return (
      waysToInterleave * leftWays % MOD * rightWays % MOD
    ) % MOD;
  }

  // Subtract one to exclude the original ordering.
  return (countWays(nums) - 1 + MOD) % MOD;
}

console.log(numOfWays([2, 1, 3])); // 1
console.log(numOfWays([3, 4, 5, 1, 2])); // 5
