
function balanceBST(root) {
  const values = [];

  // Step 1: Get sorted values using inorder traversal.
  function inorder(node) {
    if (node === null) return;

    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  // Step 2: Build a balanced BST from sorted values.
  function buildBalanced(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    const node = {
      val: values[mid],
      left: null,
      right: null
    };

    node.left = buildBalanced(left, mid - 1);
    node.right = buildBalanced(mid + 1, right);

    return node;
  }

  return buildBalanced(0, values.length - 1);
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
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null
      }
    }
  }
};

const balanced = balanceBST(root);

console.log(inorderTraversal(balanced));
// [1, 2, 3, 4]

console.log(balanced.val);
// 2
