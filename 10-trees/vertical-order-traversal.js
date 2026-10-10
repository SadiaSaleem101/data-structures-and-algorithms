
function verticalTraversal(root) {
  if (root === null) return [];

  const nodes = [];
  const queue = [[root, 0, 0]];
  let index = 0;

  // Store each node as [column, row, value].
  while (index < queue.length) {
    const [node, row, col] = queue[index++];

    nodes.push([col, row, node.val]);

    if (node.left !== null) {
      queue.push([node.left, row + 1, col - 1]);
    }

    if (node.right !== null) {
      queue.push([node.right, row + 1, col + 1]);
    }
  }

  // Sort by column, then row, then value.
  nodes.sort((a, b) =>
    a[0] - b[0] ||
    a[1] - b[1] ||
    a[2] - b[2]
  );

  const result = [];
  let previousColumn = -Infinity;

  for (const [col, row, value] of nodes) {
    if (col !== previousColumn) {
      result.push([]);
      previousColumn = col;
    }

    result[result.length - 1].push(value);
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

console.log(verticalTraversal(root));
// [[9], [3, 15], [20], [7]]
