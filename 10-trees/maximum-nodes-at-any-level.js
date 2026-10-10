
function maximumNodesAtAnyLevel(root) {
  if (root === null) return 0;

  const queue = [root];
  let index = 0;
  let maxCount = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;

    maxCount = Math.max(maxCount, levelSize);

    // Process only the current level.
    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return maxCount;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};

console.log(maximumNodesAtAnyLevel(root)); // 4
