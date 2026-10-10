
function deepestLeavesSum(root) {
  if (root === null) return 0;

  const queue = [root];
  let index = 0;
  let deepestSum = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;

    // Reset the sum for each new level.
    deepestSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];
      deepestSum += node.val;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  // The final level's sum is the answer.
  return deepestSum;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: { val: 7, left: null, right: null },
      right: null
    },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 6, left: null, right: null }
  }
};

console.log(deepestLeavesSum(root)); // 7
