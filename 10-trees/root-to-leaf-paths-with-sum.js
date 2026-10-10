
function pathSum(root, targetSum) {
  const result = [];

  function dfs(node, remainingSum, path) {
    if (node === null) return;

    path.push(node.val);
    remainingSum -= node.val;

    // Only complete root-to-leaf paths count.
    if (node.left === null && node.right === null) {
      if (remainingSum === 0) {
        result.push([...path]);
      }
    } else {
      dfs(node.left, remainingSum, path);
      dfs(node.right, remainingSum, path);
    }

    // Backtrack before exploring another path.
    path.pop();
  }

  dfs(root, targetSum, []);

  return result;
}

const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null }
    },
    right: null
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: null,
      right: { val: 1, left: null, right: null }
    }
  }
};

console.log(pathSum(root, 22));
// [[5, 4, 11, 2]]
