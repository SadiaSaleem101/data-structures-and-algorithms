
function maxLevelSum(root) {
  if (root === null) return 0;

  const queue = [root];
  let index = 0;
  let level = 1;
  let bestLevel = 1;
  let maxSum = -Infinity;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];
      levelSum += node.val;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      bestLevel = level;
    }

    level++;
  }

  return bestLevel;
}

const root = {
  val: 1,
  left: {
    val: 7,
    left: { val: 7, left: null, right: null },
    right: { val: -8, left: null, right: null }
  },
  right: {
    val: 0,
    left: null,
    right: { val: 9, left: null, right: null }
  }
};

console.log(maxLevelSum(root)); // 3
