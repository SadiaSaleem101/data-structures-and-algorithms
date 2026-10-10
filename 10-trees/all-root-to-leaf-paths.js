
function rootToLeafPaths(root) {
  const result = [];

  function dfs(node, path) {
    if (node === null) return;

    // Add the current node to the path.
    path.push(node.val);

    // If this is a leaf, save the path.
    if (node.left === null && node.right === null) {
      result.push([...path]);
    } else {
      dfs(node.left, path);
      dfs(node.right, path);
    }

    // Backtrack before exploring another path.
    path.pop();
  }

  dfs(root, []);

  return result;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 6, left: null, right: null }
  }
};

console.log(rootToLeafPaths(root));
// [[1, 2, 5], [1, 3, 6]]
