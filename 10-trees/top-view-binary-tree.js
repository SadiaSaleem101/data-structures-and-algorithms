
function topView(root) {
  if (root === null) return [];

  const queue = [[root, 0]];
  const topNodes = new Map();
  let index = 0;

  while (index < queue.length) {
    const [node, distance] = queue[index++];

    // Keep only the first node at each distance.
    if (!topNodes.has(distance)) {
      topNodes.set(distance, node.val);
    }

    if (node.left !== null) {
      queue.push([node.left, distance - 1]);
    }

    if (node.right !== null) {
      queue.push([node.right, distance + 1]);
    }
  }

  // Sort horizontal distances from left to right.
  return [...topNodes.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([distance, value]) => value);
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 4, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 5, left: null, right: null }
  }
};

console.log(topView(root));
// [2, 1, 3, 5]
