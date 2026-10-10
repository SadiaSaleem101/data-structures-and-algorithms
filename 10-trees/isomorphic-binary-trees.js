
function isIsomorphic(root1, root2) {
  // Both trees are empty.
  if (root1 === null && root2 === null) {
    return true;
  }

  // One tree is empty, or values differ.
  if (
    root1 === null ||
    root2 === null ||
    root1.val !== root2.val
  ) {
    return false;
  }

  // Case 1: Children stay in the same positions.
  const withoutSwap =
    isIsomorphic(root1.left, root2.left) &&
    isIsomorphic(root1.right, root2.right);

  // Case 2: Left and right children are swapped.
  const withSwap =
    isIsomorphic(root1.left, root2.right) &&
    isIsomorphic(root1.right, root2.left);

  return withoutSwap || withSwap;
}

const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: null
  },
  right: { val: 3, left: null, right: null }
};

const tree2 = {
  val: 1,
  left: { val: 3, left: null, right: null },
  right: {
    val: 2,
    left: null,
    right: { val: 4, left: null, right: null }
  }
};

console.log(isIsomorphic(tree1, tree2)); // true
