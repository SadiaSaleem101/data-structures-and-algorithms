function serialize(root) {
  if (root === null) {
    return "null";
  }

  return (
    root.val + "," +
    serialize(root.left) + "," +
    serialize(root.right)
  );
}

function deserialize(data) {
  const values = data.split(",");
  let index = 0;

  function buildTree() {
    if (values[index] === "null") {
      index++;
      return null;
    }

    const node = {
      val: Number(values[index]),
      left: null,
      right: null
    };

    index++;

    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  return buildTree();
}
