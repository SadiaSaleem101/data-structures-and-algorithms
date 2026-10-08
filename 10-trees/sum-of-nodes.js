function sumOfNodes(root) {
  if (root === null) {
    return 0;
  }

  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}
