
function leafSimilar(root1, root2) {
  function getLeaves(root) {
    const leaves = [];

    function dfs(node) {
      if (node === null) return;

      // A leaf has no children.
      if (node.left === null && node.right === null) {
        leaves.push(node.val);
        return;
      }

      dfs(node.left);
      dfs(node.right);
    }

    dfs(root);
    return leaves;
  }

  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);

  return (
    leaves1.length === leaves2.length &&
    leaves1.every((value, index) => value === leaves2[index])
  );
}

const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

const tree2 = {
  val: 2,
  left: { val: 4, left: null, right: null },
  right: {
    val: 5,
    left: { val: 3, left: null, right: null },
    right: { val: 6, left: null, right: null }
  }
};

console.log(leafSimilar(tree1, tree2)); // false
