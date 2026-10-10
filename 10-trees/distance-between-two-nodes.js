
function distanceBetweenNodes(root, p, q) {
  // Find the Lowest Common Ancestor (LCA).
  function findLCA(node) {
    if (node === null) return null;

    if (node.val === p || node.val === q) {
      return node;
    }

    const left = findLCA(node.left);
    const right = findLCA(node.right);

    if (left !== null && right !== null) {
      return node;
    }

    return left !== null ? left : right;
  }

  // Find the distance from a node to a target.
  function findDistance(node, target, distance = 0) {
    if (node === null) return -1;

    if (node.val === target) {
      return distance;
    }

    const left = findDistance(node.left, target, distance + 1);

    if (left !== -1) return left;

    return findDistance(node.right, target, distance + 1);
  }

  const lca = findLCA(root);

  if (lca === null) return -1;

  const distanceP = findDistance(lca, p);
  const distanceQ = findDistance(lca, q);

  // Return -1 if either target is missing.
  if (distanceP === -1 || distanceQ === -1) {
    return -1;
  }

  return distanceP + distanceQ;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

console.log(distanceBetweenNodes(root, 4, 5)); // 2
console.log(distanceBetweenNodes(root, 4, 3)); // 3
console.log(distanceBetweenNodes(root, 4, 99)); // -1
