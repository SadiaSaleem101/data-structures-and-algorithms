
function areMirrorTrees(root1, root2) {
  // Both trees are empty.
  if (root1 === null && root2 === null) {
    return true;
  }

  // Only one tree is empty.
  if (root1 === null || root2 === null) {
    return false;
  }

  // Values must match, with opposite subtrees compared.
  return (
    root1.val === root2.val &&
    areMirrorTrees(root1.left, root2.right) &&
    areMirrorTrees(root1.right, root2.left)
  );
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

console.log(areMirrorTrees(tree1, tree2));
// true
