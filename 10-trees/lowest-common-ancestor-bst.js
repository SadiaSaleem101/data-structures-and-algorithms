function lowestCommonAncestor(root, p, q) {
  let current = root;

  while (current !== null) {
    // Both nodes are smaller
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    }

    // Both nodes are larger
    else if (p.val > current.val && q.val > current.val) {
      current = current.right;
    }

    // They are on different sides, or current is p/q
    else {
      return current;
    }
  }

  return null;
}
