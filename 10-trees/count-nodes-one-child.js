
function countNodesWithOneChild(root) {
  if (root === null) {
    return 0;
  }

  // Exactly one child must exist.
  const hasOneChild =
    (root.left === null && root.right !== null) ||
    (root.left !== null && root.right === null);

  const currentCount = hasOneChild ? 1 : 0;

  return (
    currentCount +
    countNodesWithOneChild(root.left) +
    countNodesWithOneChild(root.right)
  );
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 4,
      left: { val: 6, left: null, right: null },
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 5, left: null, right: null }
  }
};

console.log(countNodesWithOneChild(root)); // 3
