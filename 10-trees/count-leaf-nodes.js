
function countLeafNodes(root) {
  // An empty tree has no leaves.
  if (root === null) {
    return 0;
  }

  // A node without children is a leaf.
  if (root.left === null && root.right === null) {
    return 1;
  }

  // Count leaves in both subtrees.
  return (
    countLeafNodes(root.left) +
    countLeafNodes(root.right)
  );
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 6, left: null, right: null }
  }
};

console.log(countLeafNodes(root)); // 3
