function lowestCommonAncestor(root, p, q) {
  // If we reach null, there is no node here
  if (root === null) {
    return null;
  }

  // If current node is p or q
  if (root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // p and q are in different subtrees
  if (left !== null && right !== null) {
    return root;
  }

  // Return whichever side contains p or q
  return left !== null ? left : right;
}
