
function goodNodes(root) {
  function dfs(node, maxSoFar) {
    if (node === null) {
      return 0;
    }

    let count = 0;

    // A node is good if it is at least as large
    // as every ancestor on the current path.
    if (node.val >= maxSoFar) {
      count = 1;
    }

    const newMax = Math.max(maxSoFar, node.val);

    return (
      count +
      dfs(node.left, newMax) +
      dfs(node.right, newMax)
    );
  }

  return dfs(root, -Infinity);
}

const root = {
  val: 3,
  left: {
    val: 1,
    left: { val: 3, left: null, right: null },
    right: null
  },
  right: {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 5, left: null, right: null }
  }
};

console.log(goodNodes(root)); // 4
