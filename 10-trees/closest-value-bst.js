
function closestValueBST(root, target) {
  if (root === null) return null;

  let closest = root.val;
  let current = root;

  while (current !== null) {
    const currentDifference = Math.abs(current.val - target);
    const closestDifference = Math.abs(closest - target);

    // Prefer the smaller value when distances are equal.
    if (
      currentDifference < closestDifference ||
      (currentDifference === closestDifference &&
        current.val < closest)
    ) {
      closest = current.val;
    }

    if (target < current.val) {
      current = current.left;
    } else if (target > current.val) {
      current = current.right;
    } else {
      return current.val;
    }
  }

  return closest;
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
  right: { val: 12, left: null, right: null }
};

console.log(closestValueBST(root, 5));   // 4
console.log(closestValueBST(root, 10));  // 8
console.log(closestValueBST(root, 12));  // 12
