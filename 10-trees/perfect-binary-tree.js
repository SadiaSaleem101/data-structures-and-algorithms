
function isPerfectBinaryTree(root) {
  if (root === null) return true;

  // Find the leftmost leaf's level.
  let leafLevel = 0;
  let current = root;

  while (current.left !== null) {
    current = current.left;
    leafLevel++;
  }

  function check(node, level) {
    if (node === null) return true;

    // A leaf must be at the expected level.
    if (node.left === null && node.right === null) {
      return level === leafLevel;
    }

    // Every internal node must have two children.
    if (node.left === null || node.right === null) {
      return false;
    }

    return (
      check(node.left, level + 1) &&
      check(node.right, level + 1)
    );
  }

  return check(root, 0);
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
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};

console.log(isPerfectBinaryTree(root)); // true
