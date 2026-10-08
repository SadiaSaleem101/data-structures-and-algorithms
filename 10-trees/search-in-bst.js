function searchBST(root, target) {
  if (root === null || root.val === target) {
    return root;
  }

  // Target is smaller → go left
  if (target < root.val) {
    return searchBST(root.left, target);
  }

  // Target is larger → go right
  return searchBST(root.right, target);
}
