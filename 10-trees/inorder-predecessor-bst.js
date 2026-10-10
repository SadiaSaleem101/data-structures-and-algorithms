
function inorderPredecessor(root, target) {
  let predecessor = null;
  let current = root;

  while (current !== null) {
    if (current.val < target) {
      predecessor = current;
      current = current.right;
    } else {
      current = current.left;
    }
  }

  return predecessor === null ? null : predecessor.val;
}

const root = {
  val: 8,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: {
      val: 6,
      left: { val: 4, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  },
  right: {
    val: 10,
    left: null,
    right: {
      val: 14,
      left: { val: 13, left: null, right: null },
      right: null
    }
  }
};

console.log(inorderPredecessor(root, 6));
// 4

console.log(inorderPredecessor(root, 1));
// null
