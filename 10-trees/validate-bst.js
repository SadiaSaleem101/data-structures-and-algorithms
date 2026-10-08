function isValidBST(root) {
  function validate(node, min, max) {
    if (node === null) {
      return true;
    }

    // Node must stay within the allowed range
    if (node.val <= min || node.val >= max) {
      return false;
    }

    // Left subtree: values must be smaller
    // Right subtree: values must be greater
    return (
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}
