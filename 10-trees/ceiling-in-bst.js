
function ceilingInBST(root, target) {
  let ceiling = -1;
  let current = root;

  while (current !== null) {
    if (current.val === target) {
      return current.val;
    }

    if (current.val > target) {
      // Possible ceiling; search for a smaller candidate.
      ceiling = current.val;
      current = current.left;
    } else {
      // Current value is too small.
      current = current.right;
    }
  }

  return ceiling;
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
  right: { val: 10, left: null, right: null }
};

console.log(ceilingInBST(root, 5));  // 6
console.log(ceilingInBST(root, 6));  // 6
console.log(ceilingInBST(root, 9));  // 10
console.log(ceilingInBST(root, 12)); // -1
