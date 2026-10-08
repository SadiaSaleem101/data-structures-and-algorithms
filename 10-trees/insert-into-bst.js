function insertIntoBST(root, value) {
  // If there is no node, create one
  if (root === null) {
    return {
      val: value,
      left: null,
      right: null
    };
  }

  // Smaller values go to the left
  if (value < root.val) {
    root.left = insertIntoBST(root.left, value);
  }

  // Larger values go to the right
  else if (value > root.val) {
    root.right = insertIntoBST(root.right, value);
  }

  return root;
}
