function sortedArrayToBST(nums) {
  function buildTree(left, right) {
    if (left > right) {
      return null;
    }

    // Choose the middle element
    const mid = Math.floor((left + right) / 2);

    const node = {
      val: nums[mid],
      left: null,
      right: null
    };

    // Build left subtree
    node.left = buildTree(left, mid - 1);

    // Build right subtree
    node.right = buildTree(mid + 1, right);

    return node;
  }

  return buildTree(0, nums.length - 1);
}
