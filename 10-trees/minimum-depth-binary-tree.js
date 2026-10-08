function minDepth(root) {
  if (root === null) {
    return 0;
  }

  // Leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }

  // If only right child exists
  if (root.left === null) {
    return 1 + minDepth(root.right);
  }

  // If only left child exists
  if (root.right === null) {
    return 1 + minDepth(root.left);
  }

  return 1 + Math.min(
    minDepth(root.left),
    minDepth(root.right)
  );
}
