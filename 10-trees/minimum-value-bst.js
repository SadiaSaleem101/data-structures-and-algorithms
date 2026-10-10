
function findMinimum(root) {
  if (root === null) {
    return null;
  }

  let current = root;

  // The smallest value is the leftmost node.
  while (current.left !== null) {
    current = current.left;
  }

  return current.val;
}

const root = {
  val: 8,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: { val: 6, left: null, right: null }
  },
  right: { val: 10, left: null, right: null }
};

console.log(findMinimum(root));
// 1
