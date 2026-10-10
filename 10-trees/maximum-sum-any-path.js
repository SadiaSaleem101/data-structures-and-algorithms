
function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (node === null) return 0;

    // Ignore negative contributions.
    const leftSum = Math.max(0, dfs(node.left));
    const rightSum = Math.max(0, dfs(node.right));

    // A path may pass through this node.
    const currentSum = node.val + leftSum + rightSum;

    maxSum = Math.max(maxSum, currentSum);

    // Return only one branch to the parent.
    return node.val + Math.max(leftSum, rightSum);
  }

  dfs(root);
  return maxSum;
}

const root = {
  val: -10,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};

console.log(maxPathSum(root)); // 42
