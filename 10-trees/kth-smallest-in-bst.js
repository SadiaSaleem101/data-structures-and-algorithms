function kthSmallest(root, k) {
  const stack = [];
  let current = root;

  while (true) {
    // Go as far left as possible
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Visit the smallest remaining node
    current = stack.pop();
    k--;

    // kth smallest found
    if (k === 0) {
      return current.val;
    }

    // Move to the right subtree
    current = current.right;
  }
}
