
function rangeSumBST(root, low, high) {
  if (root === null) return 0;

  // If the value is too small, search the right subtree.
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  // If the value is too large, search the left subtree.
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  // The current value is in range.
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
}

const root = {
  val: 10,
  left: {
    val: 5,
    left: { val: 3, left: null, right: null },
    right: { val: 7, left: null, right: null }
  },
  right: {
    val: 15,
    left: null,
    right: { val: 18, left: null, right: null }
  }
};

console.log(rangeSumBST(root, 7, 15)); // 32
