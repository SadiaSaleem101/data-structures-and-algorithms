
function largestValues(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    let maxValue = -Infinity;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];

      maxValue = Math.max(maxValue, node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(maxValue);
  }

  return result;
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

console.log(largestValues(root));
// [1, 3, 9]
