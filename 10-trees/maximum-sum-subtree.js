
function maximumSumSubtree(root) {
  if (root === null) return 0;

  let maxSum = -Infinity;

  function calculateSum(node) {
    if (node === null) return 0;

    const leftSum = calculateSum(node.left);
    const rightSum = calculateSum(node.right);

    const currentSum = node.val + leftSum + rightSum;

    maxSum = Math.max(maxSum, currentSum);

    return currentSum;
  }

  calculateSum(root);
  return maxSum;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: -5, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 6, left: null, right: null }
  }
};

console.log(maximumSumSubtree(root)); // 11
