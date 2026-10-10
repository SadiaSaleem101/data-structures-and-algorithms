
function convertToGreaterSumTree(root) {
  let sum = 0;

  function reverseInorder(node) {
    if (node === null) return;

    // Visit larger values first.
    reverseInorder(node.right);

    sum += node.val;
    node.val = sum;

    reverseInorder(node.left);
  }

  reverseInorder(root);
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
  val: 4,
  left: {
    val: 1,
    left: { val: 0, left: null, right: null },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: {
      val: 7,
      left: null,
      right: { val: 8, left: null, right: null }
    }
  }
};

convertToGreaterSumTree(root);

console.log(inorderTraversal(root));
// [27, 27, 26, 24, 21, 15, 8, 0]
