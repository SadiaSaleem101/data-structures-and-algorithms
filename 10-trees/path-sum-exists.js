
function hasPathSum(root, targetSum) {
  if (root === null) {
    return false;
  }

  // Check whether this leaf completes the target sum.
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  const remainingSum = targetSum - root.val;

  return (
    hasPathSum(root.left, remainingSum) ||
    hasPathSum(root.right, remainingSum)
  );
}

const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null }
    },
    right: null
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: null,
      right: { val: 1, left: null, right: null }
    }
  }
};

console.log(hasPathSum(root, 22)); // true
console.log(hasPathSum(root, 26)); // true
console.log(hasPathSum(root, 100)); // false
