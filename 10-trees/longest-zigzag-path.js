
function longestZigZag(root) {
  let maxLength = 0;

  function dfs(node, leftLength, rightLength) {
    if (node === null) return;

    maxLength = Math.max(
      maxLength,
      leftLength,
      rightLength
    );

    // Moving left continues a path that previously went right.
    dfs(node.left, rightLength + 1, 0);

    // Moving right continues a path that previously went left.
    dfs(node.right, 0, leftLength + 1);
  }

  if (root !== null) {
    dfs(root, 0, 0);
  }

  return maxLength;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 4,
      left: { val: 5, left: null, right: {
        val: 6, left: null, right: null
      }},
      right: null
    }
  },
  right: { val: 3, left: null, right: null }
};

console.log(longestZigZag(root)); // 3
