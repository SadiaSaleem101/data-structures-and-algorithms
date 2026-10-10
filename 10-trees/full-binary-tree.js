
function isFullBinaryTree(root) {
  if (root === null) {
    return true;
  }

  // A node with exactly one child makes it non-full.
  if (root.left === null && root.right !== null) {
    return false;
  }

  if (root.left !== null && root.right === null) {
    return false;
  }

  return (
    isFullBinaryTree(root.left) &&
    isFullBinaryTree(root.right)
  );
}

const root1 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

console.log(isFullBinaryTree(root1)); // true

const root2 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: null
};

console.log(isFullBinaryTree(root2)); // false
