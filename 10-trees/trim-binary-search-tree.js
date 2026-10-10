
function trimBST(root, low, high) {
  if (root === null) {
    return null;
  }

  // Current value is too small.
  // Everything in its left subtree is also too small.
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }

  // Current value is too large.
  // Everything in its right subtree is also too large.
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  // Keep this node and trim both subtrees.
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
}

function inorderTraversal(root) {
  if (root === null) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ];
}

const root = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: null
    }
  },
  right: { val: 4, left: null, right: null }
};

const trimmed = trimBST(root, 1, 3);

console.log(inorderTraversal(trimmed));
// [1, 2, 3]
