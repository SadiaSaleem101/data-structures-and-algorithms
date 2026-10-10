
function inorderSuccessor(root, target) {
  let successor = null;
  let current = root;

  while (current !== null) {
    if (current.val > target) {
      successor = current;
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return successor === null ? null : successor.val;
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

console.log(inorderSuccessor(root, 6));
// 7

console.log(inorderSuccessor(root, 14));
// null
