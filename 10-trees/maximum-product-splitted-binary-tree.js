
function maxProduct(root) {
  const MOD = 1000000007;
  const subtreeSums = [];

  function getSum(node) {
    if (node === null) return 0;

    const sum =
      node.val +
      getSum(node.left) +
      getSum(node.right);

    subtreeSums.push(sum);
    return sum;
  }

  const totalSum = getSum(root);
  let maxProduct = 0;

  // Each stored sum represents one possible split.
  for (const sum of subtreeSums) {
    const product = sum * (totalSum - sum);
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct % MOD;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

console.log(maxProduct(root)); // 36
