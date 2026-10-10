
function recoverTree(root) {
  let first = null;
  let second = null;
  let previous = null;

  function inorder(node) {
    if (node === null) return;

    inorder(node.left);

    // Detect a violation in inorder order.
    if (previous !== null && previous.val > node.val) {
      if (first === null) {
        first = previous;
      }

      second = node;
    }

    previous = node;

    inorder(node.right);
  }

  inorder(root);

  // Swap the two incorrect values.
  if (first !== null && second !== null) {
    [first.val, second.val] = [second.val, first.val];
  }

  return root;
}

function inorderTraversal(root) {
  if (root === null) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ];
}

const root = {
  val: 3,
  left: { val: 1, left: null, right: null },
  right: {
    val: 4,
    left: { val: 2, left: null, right: null },
    right: null
  }
};

recoverTree(root);

console.log(inorderTraversal(root));
// [1, 2, 3, 4]
