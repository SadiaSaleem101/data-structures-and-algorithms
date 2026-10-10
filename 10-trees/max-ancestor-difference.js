
function maxAncestorDiff(root) {
  if (root === null) return 0;

  function dfs(node, minValue, maxValue) {
    if (node === null) return maxValue - minValue;

    minValue = Math.min(minValue, node.val);
    maxValue = Math.max(maxValue, node.val);

    const left = dfs(node.left, minValue, maxValue);
    const right = dfs(node.right, minValue, maxValue);

    return Math.max(left, right);
  }

  return dfs(root, root.val, root.val);
}

const root = {
  val: 8,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: {
      val: 6,
      left: { val: 4, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  },
  right: {
    val: 10,
    left: null,
    right: {
      val: 14,
      left: { val: 13, left: null, right: null },
      right: null
    }
  }
};

console.log(maxAncestorDiff(root)); // 7
