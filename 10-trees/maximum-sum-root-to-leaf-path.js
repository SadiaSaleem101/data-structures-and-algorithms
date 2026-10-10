
function maxRootToLeafSum(root) {
  if (root === null) {
    return -Infinity;
  }

  // A leaf contributes only its own value.
  if (root.left === null && root.right === null) {
    return root.val;
  }

  const leftSum = maxRootToLeafSum(root.left);
  const rightSum = maxRootToLeafSum(root.right);

  return root.val + Math.max(leftSum, rightSum);
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: null
  },
  right: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: { val: 6, left: null, right: null }
  }
};

console.log(maxRootToLeafSum(root));
// 10
