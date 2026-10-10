
function subtreeWithAllDeepest(root) {
  function dfs(node) {
    if (node === null) {
      return { depth: 0, node: null };
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left.depth > right.depth) {
      return {
        depth: left.depth + 1,
        node: left.node
      };
    }

    if (right.depth > left.depth) {
      return {
        depth: right.depth + 1,
        node: right.node
      };
    }

    // Equal depths: this node is their common ancestor.
    return {
      depth: left.depth + 1,
      node: node
    };
  }

  return dfs(root).node;
}

const root = {
  val: 3,
  left: {
    val: 5,
    left: { val: 6, left: null, right: null },
    right: {
      val: 2,
      left: { val: 7, left: null, right: null },
      right: { val: 4, left: null, right: null }
    }
  },
  right: {
    val: 1,
    left: { val: 0, left: null, right: null },
    right: { val: 8, left: null, right: null }
  }
};

console.log(subtreeWithAllDeepest(root).val); // 2
