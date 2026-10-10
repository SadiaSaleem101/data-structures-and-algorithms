
function widthOfBinaryTree(root) {
  if (root === null) return 0;

  // Each queue item stores a node and its position
  const queue = [[root, 0]];
  let maxWidth = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const firstPosition = queue[0][1];
    let first = 0;
    let last = 0;

    for (let i = 0; i < levelSize; i++) {
      const [node, position] = queue.shift();

      // Normalize positions to keep numbers smaller
      const index = position - firstPosition;

      if (i === 0) first = index;
      if (i === levelSize - 1) last = index;

      if (node.left !== null) {
        queue.push([node.left, 2 * index]);
      }

      if (node.right !== null) {
        queue.push([node.right, 2 * index + 1]);
      }
    }

    maxWidth = Math.max(maxWidth, last - first + 1);
  }

  return maxWidth;
}

const root = {
  val: 1,
  left: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: { val: 3, left: null, right: null }
  },
  right: {
    val: 2,
    left: null,
    right: { val: 9, left: null, right: null }
  }
};

console.log(widthOfBinaryTree(root)); // 4
