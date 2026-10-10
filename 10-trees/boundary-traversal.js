
function boundaryTraversal(root) {
  if (root === null) return [];

  const result = [];

  function isLeaf(node) {
    return node.left === null && node.right === null;
  }

  // Add the root first, unless it is the only node.
  if (!isLeaf(root)) {
    result.push(root.val);
  }

  // 1. Left boundary: prefer left, then right.
  let current = root.left;

  while (current !== null) {
    if (!isLeaf(current)) {
      result.push(current.val);
    }

    current =
      current.left !== null ? current.left : current.right;
  }

  // 2. All leaves, from left to right.
  function addLeaves(node) {
    if (node === null) return;

    if (isLeaf(node)) {
      result.push(node.val);
      return;
    }

    addLeaves(node.left);
    addLeaves(node.right);
  }

  addLeaves(root);

  // 3. Right boundary: collect, then reverse.
  const rightBoundary = [];
  current = root.right;

  while (current !== null) {
    if (!isLeaf(current)) {
      rightBoundary.push(current.val);
    }

    current =
      current.right !== null ? current.right : current.left;
  }

  result.push(...rightBoundary.reverse());

  return result;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: {
      val: 5,
      left: { val: 6, left: null, right: null },
      right: { val: 8, left: null, right: null }
    }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 7, left: null, right: null }
  }
};

console.log(boundaryTraversal(root));
// [1, 2, 4, 6, 8, 7, 3]
