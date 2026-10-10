
function findMaximum(root) {
  if (root === null) {
    return null;
  }

  let current = root;

  // The largest value is the rightmost node.
  while (current.right !== null) {
    current = current.right;
  }

  return current.val;
}

const root = {
  val: 8,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 12,
    left: { val: 10, left: null, right: null },
    right: { val: 15, left: null, right: null }
  }
};

console.log(findMaximum(root));
// 15
