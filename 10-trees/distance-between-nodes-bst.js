
function distanceBetweenNodes(root, p, q) {
  // Find the lowest common ancestor in the BST.
  function findLCA(node) {
    while (node !== null) {
      if (p < node.val && q < node.val) {
        node = node.left;
      } else if (p > node.val && q > node.val) {
        node = node.right;
      } else {
        return node;
      }
    }

    return null;
  }

  // Count edges from a node to a target value.
  function distanceFrom(node, target) {
    let distance = 0;

    while (node !== null && node.val !== target) {
      if (target < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }

      distance++;
    }

    return node === null ? -1 : distance;
  }

  const lca = findLCA(root);

  if (lca === null) return -1;

  const d1 = distanceFrom(lca, p);
  const d2 = distanceFrom(lca, q);

  if (d1 === -1 || d2 === -1) return -1;

  return d1 + d2;
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

console.log(distanceBetweenNodes(root, 4, 7)); // 2
console.log(distanceBetweenNodes(root, 1, 14)); // 4
