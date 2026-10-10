
function pathSum(root, targetSum) {
  const result = [];

  function dfs(node, remainingSum, path) {
    if (node === null) {
      return;
    }

    // Include the current node in the path
    path.push(node.val);
    remainingSum -= node.val;

    // A valid path must end at a leaf
    if (
      node.left === null &&
      node.right === null &&
      remainingSum === 0
    ) {
      result.push([...path]);
    } else {
      dfs(node.left, remainingSum, path);
      dfs(node.right, remainingSum, path);
    }

    // Backtrack: remove the current node
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
      left: { val: 5, left: null, right: null },
      right: { val: 1, left: null, right: null }
    }
  }
};

console.log(pathSum(root, 22));
