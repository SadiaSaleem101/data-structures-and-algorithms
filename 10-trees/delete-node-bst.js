function deleteNode(root, key) {
  if (root === null) {
    return null;
  }

  // Search in the left subtree
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }

  // Search in the right subtree
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }

  // Node found
  else {
    // Case 1: No left child
    if (root.left === null) {
      return root.right;
    }

    // Case 2: No right child
    if (root.right === null) {
      return root.left;
    }

    // Case 3: Two children
    // Find smallest node in right subtree
    let successor = root.right;

    while (successor.left !== null) {
      successor = successor.left;
    }

    // Replace current value
    root.val = successor.val;

    // Delete the successor
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
}
