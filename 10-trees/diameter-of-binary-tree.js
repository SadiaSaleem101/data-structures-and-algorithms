
function diameterOfBinaryTree(root) {
  let diameter = 0;

  function height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Longest path passing through this node
    diameter = Math.max(
      diameter,
      leftHeight + rightHeight
    );

    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

console.log(diameterOfBinaryTree(root)); // 3
