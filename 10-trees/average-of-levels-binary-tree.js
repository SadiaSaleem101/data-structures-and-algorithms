
function averageOfLevels(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];

      sum += node.val;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(sum / levelSize);
  }

  return result;
}

const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};

console.log(averageOfLevels(root));
// [3, 14.5, 11]
