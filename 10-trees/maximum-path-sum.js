function maxPathSum(root) {
  let maxSum = -Infinity;

  function maxGain(node) {
    if (node === null) {
      return 0;
    }

    // Ignore negative paths
    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);

    // Path passing through current node
    const currentPath = node.val + leftGain + rightGain;

    maxSum = Math.max(maxSum, currentPath);

    // Return the best single-side path to the parent
    return node.val + Math.max(leftGain, rightGain);
  }

  maxGain(root);

  return maxSum;
}
