
function bottomView(root) {
  if (root === null) return [];

  const queue = [[root, 0]];
  const bottomNodes = new Map();
  let index = 0;

  while (index < queue.length) {
    const [node, distance] = queue[index++];

    // Replace the previous node at this distance.
    bottomNodes.set(distance, node.val);

    if (node.left !== null) {
      queue.push([node.left, distance - 1]);
    }

    if (node.right !== null) {
      queue.push([node.right, distance + 1]);
    }
  }

  return [...bottomNodes.entries()]
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
    left: { val: 5, left: null, right: null },
    right: null
  }
};

console.log(bottomView(root));
// [2, 5, 3]
